const { DataTypes, Model } = require('sequelize');
const sequelize = require('../common/database/database.config');

const attributes = {
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  price: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  description: {
    type: DataTypes.STRING,
    allowNull: false
  }
};

const options = {
  sequelize,
  modelName: 'tree'
};

class TreeModel extends Model {
}
TreeModel.init(attributes, options);

module.exports = TreeModel;
