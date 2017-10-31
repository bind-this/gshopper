const Sequelize = require('sequelize')
const db = require('../db')

const Order_Product = db.define('order_product', {
  quantity: {
    type: Sequelize.INTEGER,
    validate: {
      min: 1
    }
  },
  purchasePrice: {
    type: Sequelize.DECIMAL(2)
  }
})

module.exports = Order_Product
