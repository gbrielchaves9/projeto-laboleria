import { insertClient } from '../repositories/clients.repository.js';
import clientsSchema from '../schemas/clients.schema.js';

export const createClient = async (req, res) => {
  const { error } = clientsSchema.validate(req.body);
  if (error) return res.status(400).json({ message: error.details[0].message });

  const { name, address, phone } = req.body;
  
  await insertClient(name, address, phone);
  
  res.status(201).end();
};
