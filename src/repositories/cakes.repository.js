import pool from '../database/database.js';



export const create = async (cake) => {
    const client = await pool.connect();
    try {
        const res = await client.query('INSERT INTO cakes(name, price, image, description) VALUES($1, $2, $3, $4) RETURNING *', [cake.name, cake.price, cake.image, cake.description]);
        return res.rows[0];
    } finally {
        client.release();
    }
};
