import express from 'express';
import cakesRoutes from './cakes.routes.js';
import clientsRoutes from './clients.routes.js';
import ordersRoutes from './orders.routes.js';

const router = express.Router();

router.use('/cakes', cakesRoutes);
router.use('/clients', clientsRoutes);
router.use('/orders', ordersRoutes);

export default router;
