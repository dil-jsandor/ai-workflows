import pool from "./db";

export async function createTables() {
    try {
        await pool.query(`
      CREATE TABLE IF NOT EXISTS workflows (
        workflow_id SERIAL PRIMARY KEY,
        title TEXT NOT NULL,
        description TEXT,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      );
    `);

        await pool.query(`
      CREATE TABLE IF NOT EXISTS steps (
        step_id SERIAL PRIMARY KEY,
        name TEXT NOT NULL,
        description TEXT,
        position INTEGER NOT NULL,
        workflow_id INTEGER NOT NULL,
        FOREIGN KEY (workflow_id) REFERENCES workflows(workflow_id)
      );
    `);

        console.log("Tables created successfully.");
    } catch (error) {
        console.error("Error creating tables:", error);
        throw error;
    }
}
