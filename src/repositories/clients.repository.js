import pool from '../database/database.js';

const createClient = async (client) => {
  const query = 'INSERT INTO clients (name, address, phone) VALUES ($1, $2, $3) RETURNING *';
  const result = await pool.query(query, [client.name, client.address, client.phone]);
  return result.rows[0];
};

export { createClient };

