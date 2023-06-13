// src/routes/cakes.routes.js
import express from 'express';
import { createCake } from '../controllers/cakes.controller.js';

const router = express.Router();

router.post('/', createCake);

export default router;
