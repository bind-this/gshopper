const Sequelize = require('sequelize');
const db = require('../db');

const Product = db.define('product', {
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  author: {
    type: Sequelize.STRING,
    allowNull: false
  },
  description: {
    type: Sequelize.TEXT,
    allowNull: false
  },
  price: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  quantity: {
    type: Sequelize.INTEGER,
    allowNull: false,
    validate: {
      min: 0
    }
  },
  img: {
    type: Sequelize.STRING,
    defaultValue: 'product-placeholder-image.jpg',
    isUrl: true
  },
  altImages: {
    type: Sequelize.ARRAY(Sequelize.STRING)
  },
  availability: {
    type: Sequelize.BOOLEAN,
    defaultValue: false
  }
});

module.exports = Product;
