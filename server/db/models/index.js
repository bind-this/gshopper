const User = require('./user')
const Product = require('./product')
const Order = require('./order')
const Order_Product = require('./order_product')
const Review = require('./review')
const Category = require('./category')


User.hasMany(Order)
Order.belongsTo(User)

Review.belongsTo(User)
Review.belongsTo(Product)

User.hasMany(Review)
Product.hasMany(Review)

Order.hasMany(Order_Product)
Order_Product.belongsTo(Order)

Product.hasMany(Order_Product)
Order_Product.belongsTo(Product)

Product.belongsToMany(Category, { through: 'product_categories' })
Category.belongsToMany(Product, { through: 'product_categories' })


module.exports = {
  User,
  Product,
  Order,
  Order_Product,
  Review,
  Category
}
