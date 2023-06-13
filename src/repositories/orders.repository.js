import pool from '../database/database.js';

const createOrder = async (clientId, cakeId, quantity, totalPrice) => {
  const query =
    'INSERT INTO orders (clientId, cakeId, quantity, createdAt, totalPrice) VALUES ($1, $2, $3, NOW(), $4) RETURNING *';
  const values = [clientId, cakeId, quantity, totalPrice];
  const result = await pool.query(query, values);
  return result.rows[0];
};

const findOrderById = async (id) => {
  const query =
    'SELECT orders.*, clients.name AS client_name, clients.address, clients.phone, cakes.name AS cake_name, cakes.price, cakes.description, cakes.image FROM orders INNER JOIN clients ON orders.clientId = clients.id INNER JOIN cakes ON orders.cakeId = cakes.id WHERE orders.id = $1';
  const result = await pool.query(query, [id]);
  return result.rows[0];
};

const findOrdersByClientId = async (clientId) => {
  const query =
    'SELECT orders.id AS order_id, orders.quantity, orders.createdAt, orders.totalPrice, cakes.name AS cake_name FROM orders INNER JOIN cakes ON orders.cakeId = cakes.id WHERE orders.clientId = $1';
  const result = await pool.query(query, [clientId]);
  return result.rows;
};

const findOrdersByDate = async (date) => {
  const query =
    'SELECT orders.id AS order_id, orders.quantity, orders.createdAt, orders.totalPrice, clients.name AS client_name, clients.address, clients.phone, cakes.name AS cake_name, cakes.price, cakes.description, cakes.image FROM orders INNER JOIN clients ON orders.clientId = clients.id INNER JOIN cakes ON orders.cakeId = cakes.id WHERE DATE(orders.createdAt) = $1';
  const result = await pool.query(query, [date]);
  return result.rows;
};

export { createOrder, findOrderById, findOrdersByClientId, findOrdersByDate };
