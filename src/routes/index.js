import { Router } from 'express';
import UserRoutes from './auth.routes';
import ProductsRoutes from './products.routes';

const route = Router();

route.use('/auth', UserRoutes);
route.use('/products', ProductsRoutes);

export default route;
