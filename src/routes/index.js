import { Router } from 'express';
import UserRoutes from './user.routes';

const route = Router();

route.use('/auth', UserRoutes);

export default route;
