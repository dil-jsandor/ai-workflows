import { FastifyInstance } from "fastify";
import pool from "../../database/db";

export default async function (fastify: FastifyInstance) {
  fastify.post("/workflows", async (request, reply) => {
    const { name } = request.body as { name: string };
    const result = await pool.query(
      "INSERT INTO workflow (name) VALUES ($1) RETURNING *",
      [name],
    );
    return result.rows[0];
  });
}
