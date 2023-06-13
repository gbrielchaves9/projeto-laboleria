// src/repositories/cakes.repository.js
import { db } from "../database/database.js";

export const checkCakeByName = async (name) => {
  const query = 'SELECT * FROM cakes WHERE name = $1';
  const result = await db.query(query, [name]);
  return result.rows[0];
};

export const insertCake = async (name, price, image, description) => {
  const query = 'INSERT INTO cakes (name, price, image, description) VALUES ($1, $2, $3, $4)';
  await db.query(query, [name, price, image, description]);
};


