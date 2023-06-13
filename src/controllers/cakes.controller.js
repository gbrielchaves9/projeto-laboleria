import { createCake as createCakeRepository, findCakeByName } from '../repositories/cakes.repository.js';

export const createCake = async (req, res) => {
  try {
    const cake = req.body;
    const existingCake = await findCakeByName(cake.name);
    if (existingCake) {
      return res.status(409).json({ error: 'Cake already exists' });
    }
    const createdCake = await createCakeRepository(cake);
    res.status(201).json(createdCake);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};
