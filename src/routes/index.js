import { Router } from 'express';
import UserRoutes from './user.routes';
import categoryRoutes from './category.routes.js'

const route = Router();

route.use('/auth', UserRoutes);
route.use('/category', categoryRoutes)

export default route;
