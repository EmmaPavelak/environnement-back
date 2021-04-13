const { DataTypes, Model } = require('sequelize');
const sequelize = require('../common/database/database.config');

const attributes = {
  firstname: {
    type: DataTypes.STRING,
    allowNull: false
  },
  lastname: {
    type: DataTypes.STRING,
    allowNull: false
  },
  username: {
    type: DataTypes.STRING,
    allowNull: false
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false
  },
  tel: {
    type: DataTypes.INTEGER,
    allowNull: true
  },
  address: {
    type: DataTypes.STRING,
    allowNull: true
  },
  birthDate: {
    type: DataTypes.DATE,
    allowNull: true
<<<<<<< HEAD:src/user/user.model.js
  },
  role: {
    type: DataTypes.STRING,
    allowNull: true
  },
  points: {
    type: DataTypes.INTEGER,
    allowNull: true
=======
>>>>>>> 4b801ec47fa772fb668bfae52ec0a971f8936ef8:src/auth/user.model.js
  }
};

const options = {
  sequelize,
  modelName: 'user'
};

class UserModel extends Model {
}
UserModel.init(attributes, options);

module.exports = UserModel;
