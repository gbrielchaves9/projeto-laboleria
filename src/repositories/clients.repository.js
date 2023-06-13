import { db } from '../database/database.js';

export const insertClient = async (name, address, phone) => {
  const query = `
    INSERT INTO clients (name, address, phone) 
    VALUES ($1, $2, $3);
  `;

  await db.query(query, [name, address, phone]);
};

