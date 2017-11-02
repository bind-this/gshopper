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

const { User, Product, Category } = require('../server/db/models')

const appData = require('../data/appData.json')
const faker = require('faker')


async function seed() {
  await db.sync({ force: true })
  console.log('db synced!')

  /*--------------------------------------------------------*\
  Users
  \*--------------------------------------------------------*/
  const userData = []
  for(let i = 0; i < 200; i++) {
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
    user.email = user.firstName + user.lastName + '@' + faker.internet.domainWord() + '.com'
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
    .filter((v, i, a) => a.indexOf(v) === i)
    .map(category => ({ name: category }))
  const categories = await Category.bulkCreate(uniqueCategoryTypes)
  console.log(`seeded ${categories.length} categories`)

  /*--------------------------------------------------------*\
  Products
  \*--------------------------------------------------------*/
  const appDataSanitized = appData.map(app => ({
    name: app.name,
    img: app.img,
    author: app.author,
    version: app.version,
    category: app.category,
    scrapeSource: app.scrapeSource,
    description: app.description,
    price: app.price === 'Free' ? 1000 : app.price * 100,
    quantity: Math.floor(Math.random() * 100) + 20,
    availability: true
  }))
  const products = await Product.bulkCreate(appDataSanitized)
  console.log(`seeded ${products.length} products`)

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
