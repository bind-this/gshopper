const Sequelize = require('sequelize')
const db = require('../db')
const Category = require('./category')

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
  available: {
    type: Sequelize.BOOLEAN,
    defaultValue: false
  }
})

Product.addCategory = function(productId, categoryId) {
  return Product.findById(productId).then(productInstance => {
    return Promise.all(
      categoryId.map(id => Category.findById(id))
    ).then(categoryInstance => {
      return productInstance.setCategories(categoryInstance)
    })
  })
}

module.exports = Product
