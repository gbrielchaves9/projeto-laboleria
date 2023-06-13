import { checkCakeByName, insertCake } from '../repositories/cakes.repository.js';
import cakesSchema from '../schemas/cakes.schema.js';

export const createCake = async (req, res) => {
  const { error } = cakesSchema.validate(req.body);
  if (error) return res.status(400).json({ message: error.details[0].message });

  const { name, price, image, description } = req.body;
  
  const existingCake = await checkCakeByName(name);
  if (existingCake) return res.status(409).json({ message: 'Bolo já existente' });
  
  await insertCake(name, price, image, description);
  
  res.status(201).end();
};
