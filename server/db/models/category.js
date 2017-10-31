const Sequelize = require('sequelize')
const db = require('../db')

const Category = db.define('Category', {
  tag: Sequelize.STRING
})

module.exports = Category
