const Sequelize = require('sequelize');
const db = require('../db');

const Reviews = db.define('product', {
  content: {
    type: Sequelize.STRING,
    allowNull: false
  },
  stars: {
    type: Sequelize.ENUM('1','2','3','4','5'),
    allowNull: false
  }
})

module.exports = Reviews;
