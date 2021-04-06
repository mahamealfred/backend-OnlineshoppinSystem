import { Router } from 'express';
import authController from '../controllers/authController';
import CheckUser from '../middleware/CheckUser';
import SignupValidator from '../middleware/SignupValidator';
const route = Router();

route.post('/signup', SignupValidator, CheckUser, authController.signup);
route.post('/signin',CheckUser,authController.singin)

export default route;
