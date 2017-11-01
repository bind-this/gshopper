/* global describe beforeEach it */

const {expect} = require('chai')
const request = require('supertest')
const db = require('../../db')
const app = require('../../index')
const {Category} = require('../../db/models')

describe('Category routes', () => {
  beforeEach(() => {
    return db.sync({force: true})
  })

  describe('/api/categories/', () => {
    let games;
    let educational;

    beforeEach(() => {
      const categories = [
        {name: 'games'},
        {name: 'educational'}
    ];
      return Category.bulkCreate(categories, { returning: true })
        .then(createdCategories => {
          games = createdCategories[0].id
          educational = createdCategories[1].id
        })
    })

    it('GET /api/categories', () => {
      return request(app)
        .get('/api/categories')
        .expect(200)
        .then(res => {
          expect(res.body).to.be.an('array').with.lengthOf(2);
          expect(res.body).to.contain.a.thing.with('name', games);
          expect(res.body).to.contain.a.thing.with('name', educational);
        })
    })

    it('POST /api/categories', () => {
      return request(app)
        .post('/api/categories')
        .send({ name: 'utility' })
        .expect(201)
        .then(res => {
          expect(res.body).to.be.an('object').with.own.property('name')
          expect(res.body.name).to.equal('utility')
        })
    })

    it('GET /api/categories/:id', () => {
      return request(app)
        .get(`/api/categories/${games}`)
        .expect(200)
        .then(res => {
          expect(res.body).to.be.an('object')
          expect(res.body.name).to.be.equal(games)
        })
    })

    it('DELETE /api/categories/:id', () => {
      return request(app)
        .delete(`/api/categories/${educational}`)
        .expect(204)
    })

    it('PUT /api/categories/:id', () => {
      return request(app)
        .put(`/api/categories/${games}`)
        .send({ name: 'utility' })
        .expect(201)
        .then(res => {
          expect(res.body.name).to.be.equal('utility')
        })
    })
  }) // end describe('/api/categories')
}) // end describe('Category routes')
