import express from 'express';
import multer from 'multer';

import UserController from './app/controllers/UserController';
import SessionController from './app/controllers/SessionController';
import FileController from './app/controllers/FileController';

import multerConfig from './config/multer';
import authMiddleware from './app/middlewares/authMiddleware';

const routes = new express.Router();
const upload = multer(multerConfig);

routes.post('/users', UserController.store);
routes.post('/sessions', SessionController.store);

routes.use(authMiddleware);

routes.put('/update', UserController.update);

routes.post('/files', upload.single('file'), FileController.store);

export default routes;
