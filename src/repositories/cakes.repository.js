import pool from '../database/database.js';

const createCake = async (cake) => {
  const query = 'INSERT INTO cakes (name, price, image, description) VALUES ($1, $2, $3, $4) RETURNING *';
  const values = [cake.name, cake.price, cake.image, cake.description];
  const result = await pool.query(query, values);
  return result.rows[0];
};

const findCakeById = async (id) => {
  const query = 'SELECT * FROM cakes WHERE id = $1';
  const result = await pool.query(query, [id]);
  return result.rows[0];
};

export { createCake, findCakeById };
