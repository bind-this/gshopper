const Sequelize = require('sequelize')
const db = require('../db')

const Category = db.define('Category', {
  name: Sequelize.STRING
})

module.exports = Category
