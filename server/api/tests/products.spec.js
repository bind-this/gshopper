/* global describe beforeEach it */

const {expect} = require('chai')
const request = require('supertest')
const db = require('../../db')
const app = require('../../index')
const {Product} = require('../../db/models')

describe('Product routes', () => {
  beforeEach(() => {
    return db.sync({force: true})
  })

  describe('/api/products/', () => {
    let aProduct;
    let bProduct;

    beforeEach(() => {
      const products = [
        {name: 'a', description: 'quality thing', price: 5.00, quantity: 2, availability: true},
        {name: 'b', description: 'its good', price: 15.00, quantity: 1, availability: true}
    ];
      return Product.bulkCreate(products, { returning: true })
        .then(createdProducts => {
          aProduct = createdProducts[0].id
          bProduct = createdProducts[1].id
        })
    })

    it('GET /api/products', () => {
      return request(app)
        .get('/api/products')
        .expect(200)
        .then(res => {
          expect(res.body).to.be.an('array').with.lengthOf(2);
          expect(res.body).to.contain.a.thing.with('name', aProduct);
          expect(res.body).to.contain.a.thing.with('name', bProduct);
        })
    })

    it('POST /api/products', () => {
      return request(app)
        .post('/api/products')
        .send({name: 'c', description: 'we made it well', price: 20.00, quantity: 5, availability: true})
        .expect(201)
        .then(res => {
          expect(res.body).to.be.an('object').with.own.property('price')
          expect(res.body.quantity).to.equal(5)
        })
    })

    it('GET /api/products/:id', () => {
      return request(app)
        .get(`/api/products/${aProduct}`)
        .expect(200)
        .then(res => {
          expect(res.body).to.be.an('object')
          expect(res.body.name).to.be.equal(aProduct)
          expect(res.body.description).to.be.equal(aProduct)
        })
    })

    it('DELETE /api/products/:id', () => {
      return request(app)
        .delete(`/api/products/${bProduct}`)
        .expect(204)
    })

    it('PUT /api/products/:id', () => {
      return request(app)
        .put(`/api/products/${aProduct}`)
        .send({name: 'd', description: 'it improved', price: 100.00, quantity: 100, availability: true})
        .expect(201)
        .then(res => {
          expect(res.body.name).to.be.equal('d')
          expect(res.body.description).to.be.equal('it improved')
        })
    })
  }) // end describe('/api/products')
}) // end describe('Product routes')
