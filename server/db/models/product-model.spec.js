// two tests for product model

const { expect, assert} = require('chai')
const db = require('../index')
// const Product = db.model('product')
import { Product } from './'

describe('Product model', () => {
  beforeEach( () => {
    return db.sync({force: true})
  })

  let quantityChecker
  Product.create({
    name: 'testProduct',
    author: 'tester',
    description: 'thisIsATestProduct',
    price: 499,
    quantity: 3
  })
  .then(product => {
    quantityChecker = product
  })

  // describe('quantity field', () => {
  //   it('should be greater than zero', () => {
  //     expect(quantityChecker.quantity).to.be.at.least(0)
  //   })
  // })
  //
  // describe('associations', () => {
  //   it('should have three associations', () => {
  //     expect(Object.keys(Product.associations)).to.deep.equal(['reviews', 'order_products', 'categories'])
  //   })
  // })
})
