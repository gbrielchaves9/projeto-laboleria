import express from 'express';
import { createCake } from '../controllers/cakes.controller.js';
import validate from '../middlewares/validationClients.middleware.js';
import { cakeSchema } from '../schemas/cakes.schema.js';

const router = express.Router();

router.post('/', validate(cakeSchema), createCake);


export default router;
