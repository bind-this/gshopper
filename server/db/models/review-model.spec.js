// one test for review model

const { expect } = require('chai')
const db = require('../index')
const Review = db.model('review')

describe('Review model', () => {
  beforeEach(() => {
    return db.sync({force: true})
  })

  let testReview
  Review.create({
    rating: 4,
    comment: 'this app is best app'
  })
  .then(review => {
    testReview = review
  })

  // describe('associations', () => {
  //   it('should have two associations', () => {
  //     expect(Object.keys(Review.associations)).to.deep.equal(['user', 'product'])
  //   })
  // })
})
