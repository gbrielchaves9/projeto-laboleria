import { createClient as createClientRepository } from '../repositories/clients.repository.js';

export const createClient = async (req, res) => {
  try {
    const client = req.body;
    const createdClient = await createClientRepository(client);
    res.status(201).json(createdClient);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};
