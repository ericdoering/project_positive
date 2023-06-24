import { Pool } from "pg";


let database = 'postgresql:///routes'

const pool = new Pool({
  user: 'ericdoering',
  host: 'localhost',
  database: 'routes',
  password: '',
  port: 5432,
});

export default pool;