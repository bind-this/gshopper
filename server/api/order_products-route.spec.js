/* global describe beforeEach it */

const {expect} = require('chai')
const request = require('supertest')
const db = require('../db')
const app = require('../index')
const {Order_Product} = require('../db/models')

describe('Order_Product routes', () => {
  beforeEach(() => {
    return db.sync({force: true})
  })

  describe('/api/order-products/', () => {
    let firstProductOrder;
    let secondProductOrder;

    beforeEach(() => {
      const orderProducts = [
        {quantity: 5, purchasePrice: 10.00},
        {quantity: 1, purchasePrice: 6.00}
    ];
      return Order_Product.bulkCreate(orderProducts, { returning: true })
        .then(createdOrderProducts => {
          firstProductOrder = createdOrderProducts[0]
          secondProductOrder = createdOrderProducts[1]
        })
    })

    it('POST /api/order-products', () => {
      return request(app)
        .post('/api/order-products/')
        .send({ quantity: 11, purchasePrice: 0.50 })
        .expect(201)
        .then(res => {
          expect(res.body.quantity).to.equal(11)
        })
    })

    it('GET /api/order-products/:id', () => {
      return request(app)
        .get(`/api/order-products/${firstProductOrder.id}`)
        .expect(200)
        .then(res => {
          expect(res.body).to.be.an('object')
          expect(res.body.quantity).to.be.equal(firstProductOrder.quantity)
          expect(res.body.purchasePrice).to.be.equal(firstProductOrder.purchasePrice)
        })
    })

    it('DELETE /api/order-products/:id', () => {
      return request(app)
        .delete(`/api/order-products/${secondProductOrder.id}`)
        .expect(204)
    })

    it('PUT /api/order-products/:id', () => {
      return request(app)
        .put(`/api/order-products/${firstProductOrder.id}`)
        .send({ quantity: 50, purchasePrice: 1.00 })
        .expect(201)
        .then(res => {
          expect(res.body.quantity).to.be.equal(50)
          expect(res.body.purchasePrice).to.be.equal(1.00)
        })
    })
  }) // end describe('/api/order-products')
}) // end describe('Order_Product routes')
