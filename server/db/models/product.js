const Sequelize = require('sequelize');
const db = require('../db');

const Product = db.define('product', {
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  description: {
    type: Sequelize.TEXT,
    allowNull: false
  },
  price: {
    type: Sequelize.DECIMAL(2),
    allowNull: false,
    get() {
      const price = this.getDataValue('price')
      return this.getDataValue('price', '$' + price)
    }
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
  availability: {
    type: Sequelize.BOOLEAN,
    defaultValue: false
  }
});

module.exports = Product;
