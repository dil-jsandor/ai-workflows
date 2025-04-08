import {FastifyInstance} from "fastify";
import pool from "../../database/db";
import {stepFunctions} from "../steps/step-functions";

type ExecuteStepRequestBody = {
    input: string,
    prompt?: string,
}

export const executeWorkflowRoute = (fastifyInstance: FastifyInstance) => {
    fastifyInstance.post<{
        Params: { id: string },
        Body: ExecuteStepRequestBody
    }>('/steps/:id/execute', async (request, reply) => {
        console.log("Workflows query: ", request.params);

        try {
            const {id} = request.params;
            const {input, prompt} = request.body;

            const result = await pool.query(
                `SELECT *
                 FROM steps
                 WHERE step_id = $1`, [id]
            );

            const {stepName} = result.rows[0].name;

            const step = stepFunctions[stepName];
            const stepResult = await step(input, prompt);

            return reply.send(stepResult);
        } catch (err) {
            console.error(err);
            return reply.code(500).send({message: "Server error"});
        }
    });
};
