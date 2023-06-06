import express from 'express';
import { createCake } from '../controllers/cakes.controller.js';
import validateCake from '../middlewares/validateCake.middleware.js';

const router = express.Router();

router.post('/', validateCake, createCake);

export default router;