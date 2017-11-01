/* global describe beforeEach it */

const {expect} = require('chai')
const request = require('supertest')
const db = require('../../db')
const app = require('../../index')
const {Review} = require('../../db/models')

describe('Review routes', () => {
  beforeEach(() => {
    return db.sync({force: true})
  })

  describe('/api/reviews/', () => {
    let goodReview;
    let badReview;

    beforeEach(() => {
      const reviews = [
        {rating: 5, comment: '10/10'},
        {rating: 1, comment: 'it sucked'}
    ];
      return Review.bulkCreate(reviews, { returning: true })
        .then(createdReviews => {
          goodReview = createdReviews[0].id
          badReview = createdReviews[1].id
        })
    })

    it('GET /api/reviews', () => {
      return request(app)
        .get('/api/reviews')
        .expect(200)
        .then(res => {
          expect(res.body).to.be.an('array').with.lengthOf(2);
          expect(res.body).to.contain.a.thing.with('rating', goodReview);
          expect(res.body).to.contain.a.thing.with('rating', badReview);
        })
    })

    it('POST /api/reviews', () => {
      return request(app)
        .post('/api/reviews')
        .send({ rating: 3, comment: 'pretty good' })
        .expect(201)
        .then(res => {
          expect(res.body).to.be.an('object').with.own.property('raiting')
          expect(res.body.rating).to.equal(3)
        })
    })

    it('GET /api/reviews/:id', () => {
      return request(app)
        .get(`/api/reviews/${goodReview}`)
        .expect(200)
        .then(res => {
          expect(res.body).to.be.an('object')
          expect(res.body.rating).to.be.equal(goodReview)
          expect(res.body.comment).to.be.equal(goodReview)
        })
    })

    it('DELETE /api/reviews/:id', () => {
      return request(app)
        .delete(`/api/reviews/${badReview}`)
        .expect(204)
    })

    it('PUT /api/reviews/:id', () => {
      return request(app)
        .put(`/api/reviews/${goodReview}`)
        .send({ rating: 4, comment: '8/10' })
        .expect(201)
        .then(res => {
          expect(res.body.rating).to.be.equal(4)
          expect(res.body.comment).to.be.equal('8/10')
        })
    })
  }) // end describe('/api/reviews')
}) // end describe('Review routes')
