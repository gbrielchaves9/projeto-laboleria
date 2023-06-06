import Joi from 'joi';

const validateCake = (req, res, next) => {
    const schema = Joi.object({
        name: Joi.string().min(2).required(),
        price: Joi.number().greater(0).required(),
        image: Joi.string().uri().required(),
        description: Joi.string().allow(''),
    });

    const { error } = schema.validate(req.body);
    if (error) {
        res.status(400).json({ error: error.details[0].message });
        return;
    }

    next();
};

export default validateCake;