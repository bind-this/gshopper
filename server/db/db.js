const Sequelize = require('sequelize');
const db = new Sequelize(
  process.env.DATABASE_URL || 'postgres://adrien@localhost:5432/bind-this-gshopper',
  {
    logging: false
  }
);
module.exports = db;
