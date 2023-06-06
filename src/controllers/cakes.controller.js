import { create } from '../repositories/cakes.repository.js';

export const createCake = async (req, res, next) => {
    try {
        const newCake = await create(req.body);
        res.status(201).json(newCake);
    } catch (error) {
        next(error);
    }
};