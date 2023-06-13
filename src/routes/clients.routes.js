import express from 'express';
import { createClient, getClientOrders } from '../controllers/clients.controller.js';
import { createClientSchema } from '../middlewares/validation.middleware.js';

const router = express.Router();

router.post('/', createClientSchema, createClient);
router.get('/:id/orders', getClientOrders);

export default router;
