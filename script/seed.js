/**
 * Welcome to the seed file! This seed file uses a newer language feature called...
 *
 *                  -=-= ASYNC...AWAIT -=-=
 *
 * Async-await is a joy to use! Read more about it in the MDN docs:
 *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function
 *
 * Now that you've got the main idea, check it out in practice below!
 */

const db = require('../server/db')

const {
  User,
  Product,
  Category,
  Review,
  Order,
  Order_Product
} = require('../server/db/models')

const appData = require('../data/appData.json')
const imgData = require('../data/imgData.json')
const faker = require('faker')

//eslint-disable-next-line
async function seed() {
  await db.sync({ force: true })
  console.log('db synced!')

  /*--------------------------------------------------------*\
  Users
  \*--------------------------------------------------------*/
  const userData = []
  for (let i = 0; i < 200; i++) {
    const user = {
      firstName: faker.name.firstName(),
      lastName: faker.name.lastName(),
      password: faker.internet.password(),
      phone: faker.phone.phoneNumber(),
      address: faker.address.streetAddress(),
      city: faker.address.city(),
      zip: faker.address.zipCode(),
      img: faker.image.avatar()
    }
    user.email =
      user.firstName +
      user.lastName +
      '@' +
      faker.internet.domainWord() +
      '.com'
    user.salt = User.generateSalt()
    userData.push(user)
  }
  let users = await User.bulkCreate(userData)
  console.log(`seeded ${users.length} users`)

  /*--------------------------------------------------------*\
  Categories
  \*--------------------------------------------------------*/
  const uniqueCategoryTypes = appData
    .map(app => app.category)
    .filter((val, idx, arr) => arr.indexOf(val) === idx)
    .map(category => ({ name: category }))
  const categories = await Category.bulkCreate(uniqueCategoryTypes)
  console.log(`seeded ${categories.length} categories`)

  /*--------------------------------------------------------*\
  Products
  \*--------------------------------------------------------*/
  const imgDataSanitized = imgData.map(img => ({
    appName: img.name,
    url: img['images-src']
  }))
  const appDataSanitized = appData.map(app => ({
    name: app.name,
    img: app.img,
    altImages: imgDataSanitized
      .filter(img => img.appName === app.name)
      .map(img => img.url),
    author: app.author,
    version: app.version,
    category: app.category,
    scrapeSource: app.scrapeSource,
    description: app.description,
    price: app.price === 'Free' ? 0 : app.price * 100,
    quantity: Math.floor(Math.random() * 100) + 20,
    availability: true
  }))
  const products = await Product.bulkCreate(appDataSanitized)
  console.log(`seeded ${products.length} products`)

  /*--------------------------------------------------------*\
  Reviews
  \*--------------------------------------------------------*/
  const NUM_REVIEWS = 200
  for (let i = 0; i < NUM_REVIEWS; i++) {
    const reviewData = {
      rating: Math.floor(Math.random() * 5) + 1,
      comment: faker.lorem.paragraph()
    }
    let review = await Review.create(reviewData)
    let user = await User.findById(Math.floor(Math.random() * users.length) + 1)
    let product = await Product.findById(
      Math.floor(Math.random() * products.length) + 1
    )
    review.setProduct(product)
    review.setUser(user)
  }
  console.log(`seeded ${NUM_REVIEWS} reviews`)

  /*--------------------------------------------------------*\
  Orders
  \*--------------------------------------------------------*/
  const NUM_ORDERS = 200
  for (let i = 0; i < NUM_ORDERS; i++) {
    const orderData = { status: 'completed' }
    let order = await Order.create(orderData)
    let user = await User.findById(Math.floor(Math.random() * users.length) + 1)
    order.setUser(user)
    const NUM_PRODUCTS = 5
    for (let j = 0; j < NUM_PRODUCTS; j++) {
      let product = await Product.findById(
        Math.floor(Math.random() * products.length) + 1
      )
      let order_product = await Order_Product.create({
        quantity: Math.floor(Math.random() * 3) + 1,
        purchasePrice: product.price
      })
      order_product.setProduct(product)
      order_product.setOrder(order)
    }
  }
  console.log(`seeded ${NUM_ORDERS} orders`)

  /*--------------------------------------------------------*\
  Product Category Associations
  \*--------------------------------------------------------*/
  const cats = await Category.findAll()
  for (let i = 0; i < cats.length; i++) {
    const prods = await Product.findAll({
      where: {
        name: {
          $in: appDataSanitized
            .filter(app => app.category === cats[i].name)
            .map(app => app.name)
        }
      }
    })
    await cats[i].setProducts(prods)
  }
  console.log(`${products.length} product_category associations made`)
  console.log(`seeded successfully`)
}

seed()
  .catch(err => {
    console.error(err.message)
    console.error(err.stack)
    process.exitCode = 1
  })
  .then(() => {
    console.log('closing db connection')
    db.close()
    console.log('db connection closed')
  })

console.log('seeding...')
