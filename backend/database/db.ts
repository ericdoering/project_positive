import { Pool } from "pg";


let database = 'postgresql:///project_positive'

const pool = new Pool({
  user: 'ericdoering',
  host: 'localhost',
  database: 'project_positive',
  password: '',
  port: 5432,
});

export default pool;