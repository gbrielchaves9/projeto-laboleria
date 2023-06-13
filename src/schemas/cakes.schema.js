import Joi from 'joi';

const createCakeSchema = Joi.object({
  name: Joi.string().min(2).required(),
  price: Joi.number().positive().required(),
  image: Joi.string().uri().required(),
  description: Joi.string().allow('').optional(),
});

export { createCakeSchema };
