require('dotenv').config();
const { Pool } = require('pg');

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  connectionTimeoutMillis: 10000,
});

pool.query('SELECT NOW()')
  .then((res) => {
    console.log('SUCCESS:', res.rows);
    pool.end();
  })
  .catch((err) => {
    console.error('CONNECTION ERROR:', err);
    pool.end();
  });
