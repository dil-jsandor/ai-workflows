import { FastifyInstance } from "fastify";
import pool from "../../database/db";

type StepType = {
  stepId: number;
  name: string;
  description: string;
  position: number;
  workflowId: number;
};

type WorkflowType = {
  workflowId: number;
  title: string;
  description: string;
  createdAt: Date;
  steps: StepType[];
};

type WorkflowsResultType = WorkflowType[];

export default async function (fastify: FastifyInstance) {
  fastify.get(
    "/workflows",
    async (_request, _reply): Promise<WorkflowsResultType> => {
      const { rows } = await pool.query(`
          SELECT 
            w.workflow_id,
            w.title AS workflow_title,
            w.description AS workflow_description,
            w.created_at,
            s.step_id,
            s.name AS step_name,
            s.description AS step_description,
            s.position
          FROM workflows w
          LEFT JOIN steps s ON w.workflow_id = s.workflow_id
          ORDER BY w.workflow_id, s.position;
        `);

      const workflowsMap: Record<number, WorkflowType> = {};

      for (const row of rows) {
        const {
          workflow_id,
          workflow_title,
          workflow_description,
          created_at,
          step_id,
          step_name,
          step_description,
          position,
        } = row;

        if (!workflowsMap[workflow_id]) {
          workflowsMap[workflow_id] = {
            workflowId: workflow_id,
            title: workflow_title,
            description: workflow_description,
            createdAt: created_at,
            steps: [],
          };
        }

        if (step_id) {
          workflowsMap[workflow_id].steps.push({
            stepId: step_id,
            name: step_name,
            description: step_description,
            position,
            workflowId: workflow_id,
          });
        }
      }

      const workflows = Object.values(workflowsMap);
      console.log("workflows", workflows);
      return workflows;
    },
  );
}
