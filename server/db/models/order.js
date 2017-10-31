const Sequelize = require('sequelize')
const db = require('../db')

const Order = db.define('order', {
  status: {
    type: Sequelize.ENUM('created', 'processing', 'completed', 'cancelled'), //created means its a 'cart', processing begins when cart is submitted
    defaultValue: 'created',
    allowNull: false
  },
  sessionId: {
    type: Sequelize.STRING
  }
})

module.exports = Order
