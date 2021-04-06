import { Router } from 'express';
const route = Router();
import categoriesController from '../controllers/category'

route.post('/save', categoriesController.createCategory);
route.get('/', categoriesController.getCategories)
route.patch('/:id', categoriesController.updateProductCategory)
route.delete('/:id', categoriesController.deleteProductCategory)
route.get('/:id', categoriesController.OneCategory)
route.get('/:name', categoriesController.findCategoryByName)
export default route;
