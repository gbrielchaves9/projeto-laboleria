import express from 'express';
import { postOrder } from '../controllers/orders.controller.js';
import { validationMiddleware } from '../middlewares/validationClients.middleware.js';
import { orderSchema } from '../schemas/orders.schema.js';

const router = express.Router();

router.post('/', validationMiddleware(orderSchema), postOrder);

export default router;
