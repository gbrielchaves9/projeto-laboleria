import express from 'express';
import { createOrder, getOrders, getOrderById } from '../controllers/orders.controller.js';
import { createOrderSchema } from '../middlewares/validation.middleware.js';

const router = express.Router();

router.post('/', createOrderSchema, createOrder);
router.get('/', getOrders);
router.get('/:id', getOrderById);

export default router;
