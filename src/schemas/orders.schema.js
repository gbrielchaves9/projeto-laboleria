import Joi from 'joi';

const createOrderSchema = Joi.object({
  clientId: Joi.number().integer().positive().required(),
  cakeId: Joi.number().integer().positive().required(),
  quantity: Joi.number().integer().positive().max(4).required(),
  totalPrice: Joi.number().positive().required(),
});

export { createOrderSchema };
