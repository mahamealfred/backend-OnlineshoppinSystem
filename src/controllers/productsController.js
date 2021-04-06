import Models from '../database/models';

class productsController {
	static async add(req, res) {
		try {
			const { products } = Models;
			const { name, categoryId, price, quantity, description } = req.body;

			await products.create({
				name,
				categoryId,
				price,
				quantity,
				description,
			});

			return res.status(200).json({
				status: 200,
				message: 'New product have been added',
			});
		} catch (error) {
			return res.status(500).json({
				status: 500,
				message: error.message,
			});
		}
	}
	static async get(req, res) {
		try {
			const { products } = Models;
			const data = await products.findAll({});

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
