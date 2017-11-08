const router = require('express').Router()
const Product = require('../db/models/product')
const Category = require('../db/models/category')

//Fuzzy search is has not been created/implemented within these routes

//PARAM - sets product instance to req.product
router.param('id', (req, res, next, id) => {
  console.log('testing route')
  Product.findById(id, { include: [{ all: true }] })
    .then(product => {
      if (!product) {
        const err = Error('product not found')
        err.status = 404
        throw err
      } else {
        req.product = product
        next()
        return null
      }
    })
    .catch(next)
})

//GET - finds all products
router.get('/', (req, res, next) => {
  Product.findAll({
    include: [
      {
        all: true
      }
    ]
  })
    .then(products => res.json(products))
    .catch(next)
})

//GET - finds one product by id
router.get('/:id', (req, res, next) => {
  res.json(req.product)
})

//DELETE - deletes one product by id
router.delete('/:id', (req, res, next) => {
  req.product
    .destroy()
    .then(() => res.sendStatus(204))
    .catch(next)
})

//PUT - updates one product by id
router.put('/:id', (req, res, next) => {
  req.product
    .update(req.body)
    .then(product => res.status(201).json(product))
    .catch(next)
})

//POST - creates new product, assigns categories to product
router.post('/', (req, res, next) => {
  Product.create(req.body)
    .then(product => res.status(201).json(product))
    .catch(next)
})

//POST - adds category to product
router.post('/category', (req, res, next) => {
  Product.addCategory(req.body.product, req.body.category)
    .then(() => res.sendStatus(201))
    .catch(next)
})

module.exports = router
