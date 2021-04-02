import Models from '../database/models';
import bcrypt from 'bcryptjs';
class authController {
	static async signup(req, res) {
		try {
			const { users } = Models;
			const { fullName, email, password } = req.body;
			const salt = bcrypt.genSaltSync(10);
			const hashPassword = bcrypt.hashSync(password, salt);
			await users.create({
				fullName,
				email,
				password: hashPassword,
			});
			return res.status(201).json({
				status: 201,
				message: 'User have been created',
			});
		} catch (error) {
			return res.status(500).json({
				status: 500,
				message: error.message,
			});
		}
	}
}

export default authController;
