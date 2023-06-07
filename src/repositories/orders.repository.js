import pool from '../database/database.js';

const createOrder = async ({ clientId, cakeId, quantity, totalPrice }) => {
  const query = 'INSERT INTO orders (clientId, cakeId, quantity, createdAt, totalPrice) VALUES ($1, $2, $3, NOW(), $4)';
  await pool.query(query, [clientId, cakeId, quantity, totalPrice]);
};

export { createOrder };