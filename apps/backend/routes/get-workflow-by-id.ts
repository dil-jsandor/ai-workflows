import {Workflow} from "../types/workflow";
import {FastifyInstance} from "fastify";
import pool from "../../database/db";

export const getWorkflowById = (fastifyInstance: FastifyInstance) => {
    fastifyInstance.get<{ Params: { id: string } }>('/workflows/:id', async (request, reply) => {
        console.log("Workflows query: ", request.params);

        try {
            const { id } = request.params;

            const result = await pool.query(
                `SELECT
                     w.workflow_id AS "workflowId",
                     w.title,
                     w.description,
                     w.created_at AS "createdAt",
                     s.step_id AS "stepId",
                     s.name AS "stepName",
                     s.description AS "stepDescription",
                     s.position AS "stepPosition",
                     s.workflow_id AS "stepWorkflowId"
                 FROM workflows w
                          LEFT JOIN steps s ON w.workflow_id = s.workflow_id
                 WHERE w.workflow_id = $1
                 ORDER BY s.position ASC`,
                [id]
            );

            if (result.rows.length === 0) {
                return reply.code(404).send({ message: "Workflow not found" });
            }

            const firstRow = result.rows[0];
            const workflow: Workflow = {
                workflowId: firstRow.workflowId,
                title: firstRow.title,
                description: firstRow.description,
                createdAt: firstRow.createdAt,
                steps: []
            };

            for (const row of result.rows) {
                if (row.stepId) {
                    workflow.steps.push({
                        stepId: row.stepId,
                        name: row.stepName,
                        description: row.stepDescription,
                        position: row.stepPosition,
                        workflowId: row.stepWorkflowId
                    });
                }
            }

            return reply.send(workflow);

        } catch (err) {
            console.error(err);
            return reply.code(500).send({ message: "Server error" });
        }
    });
};
