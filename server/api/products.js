const router = require('express').Router()
const Product = require('../db/models/product')
const Sequelize = require('sequelize')
const Op = Sequelize.Op

// match product id
router.param('id', (req, res, next, id) => {
  Product.findOne({
    where: {
      id: id,
      include: [{
        all: true
      }]
    }
  })
  .then(product => {
    if (!product) {
      throw HttpError(404)
    }
    req.product = product
    next()
  })
  .catch(next)
})

// find all products
router.get('/', (req, res, next) => {
  Product.findAll({
    include: [{
      all: true
    }]
  })
  .then(products => res.json(products))
  .catch(next)
})

// get a product by id
router.get('/:id', (req, res, next) => {
  res.json(req.product)
  .catch(next)
})

// delete a product by id
router.delete('/:id', (req, res, next) => {
  req.product.destroy()
  .then(product => res.status(204).end())
  .catch(next)
})

// update a product by id
router.put('/:id', (req, res, next) => {
  req.product.update(req.body)
  .then(product => res.status(201).end())
  .catch(next)
})

// create a new product
router.post('/', (req, res, next) => {
  Product.create(req.body)
  .then(product => res.status(201).json(product))
  .catch(next)
})

// search by name or partial name
router.get('/search-product', (req, res, next) => {
  Product.findOne({
    where: {
      name: {
        [Op.like]: req.body.name
      },
      include: {
        all: true
      }
    }
  })
  .then(product => res.json(product))
  .catch(next)
})

module.exports = router
