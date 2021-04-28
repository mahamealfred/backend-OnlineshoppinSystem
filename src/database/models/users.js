'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
	class users extends Model {
		/**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
		static associate(models) {
			// define association here
			users.hasMany(models.orders,{
				foreignKey:'userId',
				onDelete:'CASCADE',
				onUpdate:'CASCADE',
			  });
			}
	}
	users.init(
		{
			fullName: DataTypes.STRING,
			email: DataTypes.STRING,
			role: DataTypes.STRING,
			password: DataTypes.STRING,
		},
		{
			sequelize,
			modelName: 'users',
		},
	);
	return users;
};
