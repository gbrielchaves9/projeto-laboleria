import express from 'express';
import { createCake, getCakes } from '../controllers/cakes.controller.js';
import { createCakeSchema } from '../middlewares/validation.middleware.js';

const router = express.Router();

router.post('/', createCakeSchema, createCake);
router.get('/', getCakes);

export default router;
