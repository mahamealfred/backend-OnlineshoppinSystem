import { Router } from 'express';
import productsController from '../controllers/productsController';
import isAdmin from '../middleware/IsAdmin'

const route = Router();

route.post('/', isAdmin, productsController.add);
route.get('/', productsController.get);

export default route;
