const router = require('express').Router()
const { Order_Product } = require('../db/models')
const { Order } = require('../db/models')

// POST - create a new order /api/order-products/
router.post('/', (req, res, next) => {
  Order_Product.create(req.body)
    .then(order_product => res.json(order_product))
    .catch(next)
})

// POST - add an item to cart
router.post('/cart', (req, res, next) => {
  Order.findOne({
    where: {
      status: 'created',
      $or: [
        {
          userId: req.body.userId,
        },
        {
          sessionId: req.sessionID,
        }
      ]
    }
  })
  .then(foundOrder => {
    if (!foundOrder) {
      foundOrder = Order.create({
          status: 'created',
          userId: req.body.userId,
          sessionId: req.sessionID
      }).then(ord => console.log(ord))
    }
    req.body.orderId = foundOrder.id
    return Order_Product.findOne({
      where: {
        productId: req.body.productId,
        orderId: req.body.orderId
      }
    })
  })
    .then(oproduct => {
      if (!oproduct) {
        return Order_Product.create(req.body).then(result => {
          return result.toJSON()
        })
      } else {
        return oproduct.update(req.body).then(result => {
          return result.toJSON()
        })
      }
    })
    .then(result => {
      res.json(result)
      return null
    })
    .catch(next)

})

// router.param to catch :Id
router.param('id', (req, res, next, orderProductId) => {
  Order_Product.findOne({
    where: { id: orderProductId }
  })
    .then(orderProduct => {
      if (!orderProduct) {
        const err = Error('Order Product not found')
        err.status = 404
        next(err)
        return null
      } else {
        req.orderProduct = orderProduct
        next()
        return null
      }
    })
    .catch(next)
})

// GET - find by Id /api/order-products/:id
router.get('/:id', (req, res, next) => {
  res.json(req.orderProduct)
})

// PUT - update an existing order /api/orders/:id
router.put('/:id', (req, res, next) => {
  req.orderProduct
    .update(req.body)
    .then(orderProduct => res.json(orderProduct))
    .catch(next)
})

// DELETE - delete an existing orderProduct /api/order-products/:id
router.delete('/:id', (req, res, next) => {
  req.orderProduct
    .destroy()
    .then(() => res.status(204).end())
    .catch(next)
})

module.exports = router
