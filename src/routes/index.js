import { Router } from 'express';
import UserRoutes from './auth.routes';

const route = Router();

route.use('/auth', UserRoutes);

export default route;
