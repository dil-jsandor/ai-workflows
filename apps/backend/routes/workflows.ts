import { FastifyInstance } from "fastify";
import pool from "../../database/db";

export default async function (fastify: FastifyInstance) {
    fastify.get('/workflows', async (request, reply) => {
        const { rows } = await pool.query('SELECT * FROM workflows');
        return rows;
    });

    fastify.post('/workflows', async (request, reply) => {
        const { name } = request.body as { name: string };
        const result = await pool.query(
            'INSERT INTO workflows (name) VALUES ($1) RETURNING *',
            [name]
        );
        return result.rows[0];
    });
  fastify.post("/workflows", async (request, reply) => {
    const { name } = request.body as { name: string };
    const result = await pool.query(
      "INSERT INTO workflow (name) VALUES ($1) RETURNING *",
      [name],
    );
    return result.rows[0];
  });
}
