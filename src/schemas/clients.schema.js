import Joi from 'joi';

const schema = Joi.object({
  name: Joi.string().required(),
  address: Joi.string().required(),
  phone: Joi.string().length(10, 'utf8').or(Joi.string().length(11, 'utf8')).pattern(/^[0-9]+$/).required()
});

export default schema;
