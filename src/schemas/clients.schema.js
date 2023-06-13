import Joi from 'joi';

const createClientSchema = Joi.object({
  name: Joi.string().required(),
  address: Joi.string().required(),
  phone: Joi.string().pattern(/^\d{10,11}$/).required(),
});

export { createClientSchema };