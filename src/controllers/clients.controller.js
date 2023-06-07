import * as ClientsRepository from '../repositories/clients.repository.js';

export const create = async (req, res, next) => {
    try {
        const client = await ClientsRepository.createClient(req.body);
        res.status(201).send();
    } catch (error) {
        next(error);
    }
};
