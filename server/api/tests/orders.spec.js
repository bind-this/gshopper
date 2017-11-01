/* global describe beforeEach it */

const {expect} = require('chai')
const request = require('supertest')
const db = require('../../db')
const app = require('../../index')
const {Order} = require('../../db/models')

describe('Order routes', () => {
  beforeEach(() => {
    return db.sync({force: true})
  })

  describe('/api/orders/', () => {
    let firstOrder;
    let secondOrder;

    beforeEach(() => {
      const orders = [
        {status: 'created', sessionId: '1h63hf74y6'},
        {status: 'processing', sessionId: '38fhjgu4u3'}
    ];
      return Order.bulkCreate(orders, { returning: true })
        .then(createdOrders => {
          firstOrder = createdOrders[0].id
          secondOrder = createdOrders[1].id
        })
    })

    it('GET /api/orders', () => {
      return request(app)
        .get('/api/orders')
        .expect(200)
        .then(res => {
          expect(res.body).to.be.an('array').with.lengthOf(2);
          expect(res.body).to.contain.a.thing.with('status', firstOrder);
          expect(res.body).to.contain.a.thing.with('status', secondOrder);
        })
    })

    it('POST /api/orders', () => {
      return request(app)
        .post('/api/orders')
        .send({ status: 'processing', sessionId: '48vgh3ttug4' })
        .expect(201)
        .then(res => {
          expect(res.body).to.be.an('object').with.own.property('status')
          expect(res.body.status).to.equal('processing')
        })
    })

    it('GET /api/orders/:id', () => {
      return request(app)
        .get(`/api/orders/${firstOrder}`)
        .expect(200)
        .then(res => {
          expect(res.body).to.be.an('object')
          expect(res.body.status).to.be.equal(firstOrder)
          expect(res.body.sessionId).to.be.equal(firstOrder)
        })
    })

    it('DELETE /api/orders/:id', () => {
      return request(app)
        .delete(`/api/orders/${secondOrder}`)
        .expect(204)
    })

    it('PUT /api/orders/:id', () => {
      return request(app)
        .put(`/api/orders/${firstOrder}`)
        .send({ status: 'completed', sessionId: '4rkh45yt6hf4' })
        .expect(201)
        .then(res => {
          expect(res.body.status).to.be.equal('completed')
          expect(res.body.sessionId).to.be.equal('4rkh45yt6hf4')
        })
    })
  }) // end describe('/api/orders')
}) // end describe('Order routes')
