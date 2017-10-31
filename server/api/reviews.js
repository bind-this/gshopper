const router = require('express').Router()
const { Review } = require('../db/models')

// POST - create a new order /api/reviews/
router.post('/', (req, res, next) => {
  Review.create(req.body)
  .then(review => res.json(review))
  .catch(next)
})

// router.param to catch :Id
router.param('id', (req, res, next, reviewId) => {
  Review.findOne({
    where: { id: reviewId }
  })
    .then(review => {
      if (!review) {
        const err = Error('Review not found');
        err.status = 404;
        next(err);
      } else {
        req.review = review;
        next();
      }
    })
    .catch(next)
});

// PUT - update an existing order /api/reviews/:id
router.put('/:id', (req, res, next) => {
  req.review.update(req.body)
    .then(review => res.json(review))
    .catch(next);
})

  // DELETE - delete an existing review /api/reviews/:id
router.delete('/:id', (req, res, next) => {
  req.review.destroy()
    .then(() => res.status(204).end())
    .catch(next);
})

module.exports = router
