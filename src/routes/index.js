import { Router } from 'express';
import categoryRoutes from './category.routes.js'
import UserRoutes from './auth.routes';

const route = Router();

route.use('/auth', UserRoutes);
route.use('/category', categoryRoutes)

export default route;
