import { Pool } from 'pg';

const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'aiworkflows',
    password: 'postgres',
    port: 9876,
});

export default pool;
