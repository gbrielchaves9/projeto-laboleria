import express from 'express';
import cakeRoutes from './cakes.routes.js';
import clientRoutes from './clients.routes.js';

const router = express.Router();

router.use('/cakes', cakeRoutes);
router.use('/clients', clientRoutes);

export default router;
