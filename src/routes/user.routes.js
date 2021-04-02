import { Router } from 'express';
import authController from '../controllers/authController';
import CheckUser from '../helpers/CheckUser';
const route = Router();

route.post('/signup', CheckUser, authController.signup);

export default route;
