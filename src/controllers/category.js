import productCategory from '../services/productCategoryServices';


class categoriesController {

    static async createCategory(req, res) {
        try {
          const newCategory = {
            name: req.body.name,
          };
          const createdCatgory = await productCategory.createCategory(newCategory);
          res.status(201).json({
            status: 201,
            message: 'new product category created',
            data: createdCatgory,
          });
        } catch (error) {
            res.status(500).json({ status: 500, message: 'server error' });
        }
      }

      static async getCategories(req,res){
          try {
            const productCategories = await productCategory.getProductCategories();
            res.status(200).json({
                status: 200,
                message:"all product categories",
                data: productCategories
                })

          } catch (error) {
            res.status(500).json({ status: 500, message: 'server error' });
          }
      }

      static async updateProductCategory(req, res) {
        try {
          const updateCategory = {
            name: req.body.name
          };
          const prop = {
            id: req.params.id,
          };
          const updatedCategory = await productCategory.updateAtt(updateCategory, prop);
          res.status(200).json({
            status: 200,
            message:"updated category",
            data: updatedCategory
            })
        } catch (error) {
            res.status(500).json({ status: 500, message: 'server error' });
        }
      }

      static async deleteProductCategory(req, res) {
        try {
          const modelId = req.params.id;
          const deleteCategory = await productCategory.deleteProductCategory(modelId);
          res.status(200).json({
            status: 200,
            message:"deleted category",
            data: deleteCategory
            })
        } catch (error) {
            res.status(500).json({ status: 500, message: 'server error' });
        }
      }
      static async OneCategory(req, res) {
        try {
          const modelId = req.params.id;
          const singlecategory = await productCategory.findById(modelId);
          res.status(200).json({
            status: 200,
            message:"retrieved category",
            data: singlecategory
            })
        } catch (error) {
            res.status(500).json({ status: 500, message: 'server error' });
        }
      }
      static async findCategoryByName(req, res) {
        try {
          const { name } = req.params;
          const singlecategoryByName = await productCategory.findByName({ name });
          res.status(200).json({
            status: 200,
            message:"retrieved category",
            data: singlecategoryByName
            })
        } catch (error) {
            res.status(500).json({ status: 500, message: 'server error' });
        }
      }
}

export default categoriesController;