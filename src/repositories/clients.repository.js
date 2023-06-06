import pool from '../database/database.js';

export const create = async (client) => {
    const clientDb = await pool.connect();
    try {
        const res = await clientDb.query('INSERT INTO clients(name, address, phone) VALUES($1, $2, $3) RETURNING *', [client.name, client.address, client.phone]);
        return res.rows[0];
    } finally {
        clientDb.release();
    }
};