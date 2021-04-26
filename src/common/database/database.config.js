const Sequelize = require('sequelize');

const sequelize = new Sequelize('environment_toto', 'env_admin', 'cE5tP0pR2sxH0e', {
  host: 'btcv.fr',
  dialect: 'mysql'
});

sequelize
  .authenticate()
  .then(() => console.log('Connection has been established successfully.'))
  .catch(err => console.error('Database error:', err));
sequelize.sync();

module.exports = sequelize;
