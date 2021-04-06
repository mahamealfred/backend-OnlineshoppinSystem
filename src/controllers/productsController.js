import Models from '../database/models';
const { categories, products} = Models
class productsController {
	static async add(req, res) {
		try {
			const { name, categoryId, price, quantity, description, imageUrl } = req.body;

			const found = await categories.findOne({
				where: { id: categoryId },
			  });
			  if (found) {
				  
			await products.create({
				name,
				categoryId,
				price,
				quantity,
				imageUrl,
				description,
			}); 
				return res.status(200).json({
					status: 200,
					message: 'New product have been added',
				});
			  }
			  else{
				return res.status(400).json({
					status: 400,
					message: 'Category not found',
				});
			  }
		
		} catch (error) {
			return res.status(500).json({
				status: 500,
				message: error.message,
			});
		}
	}
	static async get(req, res) {
		try {
			const data = await products.findAll({
				include:[
					{
						model: categories
					}
				]
			});

			return res.status(200).json({
				status: 200,
				message: 'Fetchs products succeffuly',
				data: data,
			});
		} catch (error) {
			return res.status(500).json({
				status: 500,
				message: error.message,
			});
		}
	}
}

export default productsController;
