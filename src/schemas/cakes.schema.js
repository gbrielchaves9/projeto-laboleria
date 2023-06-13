import joi from 'joi';

const cakesSchema = joi.object({
  name: joi.string().min(2).required(),
    price: joi.number().positive().required(),
    image: joi.string().regex(/\.com/).required(),
    description: joi.string()
});

export default cakesSchema;



