const router = require('express').Router()
const { Order } = require('../db/models')

// GET - all orders /api/orders/
router.get('/', (req, res, next) => {
  Order.findAll({ include: [{ all: true }] })
    .then(orders => res.json(orders))
    .catch(next)
})

// POST - create a new order /api/orders/
router.post('/', (req, res, next) => {
  Order.create(req.body)
    .then(order => res.json(order))
    .catch(next)
})

// routes with Id required are going to use router.param
// router.param to catch :Id
router.param('id', (req, res, next, orderId) => {
  Order.findOne({
    where: { id: orderId },
    include: [{ all: true, nested: true }]
  })
    .then(order => {
      if (!order) {
        const err = Error('Order not found')
        err.status = 404
        next(err)
        return null
      } else {
        req.order = order
        next()
        return null
      }
    })
    .catch(next)
})

// GET - find by Id /api/orders/:id
router.get('/:id', (req, res, next) => {
  res.json(req.order)
})

// PUT - update an existing order /api/orders/:id
router.put('/:id', (req, res, next) => {
  req.order
    .update(req.body)
    .then(order => res.json(order))
    .catch(next)
})

// DELETE - delete an existing order /api/orders/:id
router.delete('/:id', (req, res, next) => {
  req.order
    .destroy()
    .then(() => res.status(204).end())
    .catch(next)
})

module.exports = router
