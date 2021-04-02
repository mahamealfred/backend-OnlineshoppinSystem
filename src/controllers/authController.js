import Models from '../database/models';

class authController {
	static async signup(req, res) {
		const { users } = Models;
		const { fullName, email, password } = req.body;

		return res.status(200).json({
			body: req.body,
		});
	}
}

export default authController;
