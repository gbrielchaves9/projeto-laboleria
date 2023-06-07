import express from 'express';
import * as ClientsController from '../controllers/clients.controller.js';
import clientsSchema from '../schemas/clients.schema.js';
import validationMiddleware from '../middlewares/validationClients.middleware.js';

const router = express.Router();

router.post('/', validationMiddleware(clientsSchema), ClientsController.create);

export default router;