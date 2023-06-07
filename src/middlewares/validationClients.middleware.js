
const validationMiddleware = (schema) => async (req, res, next) => {
    try {
        await schema.validateAsync(req.body);
        next();
    } catch (error) {
        res.status(400).json({ error: error.details[0].message });
    }
};

export default validationMiddleware;