import pool from "./db";

export async function createTables() {
  try {
    await pool.query(`
            CREATE TABLE IF NOT EXISTS workflows
            (
                workflow_id
                SERIAL
                PRIMARY
                KEY,
                title
                TEXT
                NOT
                NULL,
                description
                TEXT,
                created_at
                TIMESTAMP
                DEFAULT
                CURRENT_TIMESTAMP
            );
        `);

    await pool.query(`
            CREATE TABLE IF NOT EXISTS steps
            (
                step_id
                SERIAL
                PRIMARY
                KEY,
                name
                TEXT
                NOT
                NULL,
                description
                TEXT,
                position
                INTEGER
                NOT
                NULL,
                workflow_id
                INTEGER
                NOT
                NULL,
                FOREIGN
                KEY
            (
                workflow_id
            ) REFERENCES workflows
            (
                workflow_id
            )
                );
        `);

    const title = "Test workflow";
    const description = "Test workflow description";

    const { rows: workflowRows } = await pool.query(
      `INSERT INTO workflows (title, description) VALUES ($1, $2) RETURNING workflow_id`,
      [title, description],
    );

    const workflowId = workflowRows[0]?.workflow_id;

    if (!workflowId) {
      throw new Error("Failed to insert workflow.");
    }

    console.log("Created workflow with ID:", workflowId);

    const stepName = "Generate Report";
    const stepDescription = "Test step description";
    const position = 1;

    const { rows: stepRows } = await pool.query(
      `INSERT INTO steps (name, description, position, workflow_id)
       VALUES ($1, $2, $3, $4)
       RETURNING step_id`,
      [stepName, stepDescription, position, workflowId],
    );

    const stepId = stepRows[0]?.step_id;

    if (!stepId) {
      throw new Error("Failed to insert step.");
    }

    console.log("Created step with ID:", stepId);
    console.log("Tables created successfully.");
  } catch (error) {
    console.error("Error creating tables or inserting data:", error);
    throw error;
  }
}
