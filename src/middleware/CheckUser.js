import Models from '../database/models';

const CheckUser = async (req, res, next) => {
	const { email } = req.body;
	const { users } = Models;
	const found = await users.findOne({ where: { email } });
	if (found) {
		return res.status(400).json({
			status: 400,
			message: 'User with email already exists',
		});
	}
	next();
};

export default CheckUser;

// findOne({ where: { email } });
