import pool from '../database/database.js';

const createClient = async (client) => {
  const query = 'INSERT INTO clients (name, address, phone) VALUES ($1, $2, $3) RETURNING *';
  const result = await pool.query(query, [client.name, client.address, client.phone]);
  return result.rows[0];
};

const findClientById = async (id) => {
  const query = 'SELECT * FROM clients WHERE id = $1';
  const result = await pool.query(query, [id]);
  return result.rows[0];
};

export { createClient, findClientById };
