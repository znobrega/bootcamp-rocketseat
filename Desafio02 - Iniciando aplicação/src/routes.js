import express from 'express';

import UserController from './app/controllers/UserController';
import SessionController from './app/controllers/SessionController';

import User from './app/models/User';

import authMiddleware from './app/middlewares/authMiddleware';

const routes = new express.Router();

routes.post('/users', UserController.store);
routes.post('/sessions', SessionController.store);

routes.use(authMiddleware);

routes.put('/update', UserController.update);

export default routes;
