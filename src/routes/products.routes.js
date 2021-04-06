import { Router } from 'express';
import productsController from '../controllers/productsController';

const route = Router();

route.post('/', productsController.add);
route.get('/', productsController.get);

export default route;
