import Joi from 'joi';
 const clientSchema = Joi.object({
    name: Joi.string().required(),
    address: Joi.string().required(),
    phone: Joi.alternatives().try(
        Joi.string().length(10).pattern(/^[0-9]+$/),
        Joi.string().length(11).pattern(/^[0-9]+$/)
    ).required(),
});

export default clientSchema;