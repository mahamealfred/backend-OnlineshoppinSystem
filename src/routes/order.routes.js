import { Router } from 'express';
import orderController from '../controllers/orderController';
import isAdmin from '../middleware/IsAdmin'
import CheckUser from '../middleware/CheckUser';

const route = Router();

route.post('/', orderController.add);
route.get('/', orderController.getAllOrder);
route.delete('/:id', orderController.deleteOrder);


export default route;