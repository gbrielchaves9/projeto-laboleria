import express from 'express';
import cakesRoutes from './cakes.routes.js';

const router = express.Router();

router.use('/cakes', cakesRoutes);

export default router;