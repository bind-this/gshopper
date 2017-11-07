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
  console.log('first req.body', req.body)
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
      console.log('order not found, creating it')
      foundOrder = Order.create({
          status: 'created',
          userId: req.body.userId,
          sessionId: req.sessionID
      })
    }
    return foundOrder})
    .then(foundOrder => {
      req.body.orderId = foundOrder.id
      console.log('orderId is', req.body.orderId)
      return Order_Product.findOne({
        where: {
          productId: req.body.productId,
          orderId: req.body.orderId
        }
      })

    })
    .then(oproduct => {
      if (!oproduct) {
        console.log('creating db entry with', req.body)
        return Order_Product.create(req.body).then(result => {
          return result.toJSON()
        })
      } else {
        console.log(oproduct)
        return oproduct.update(req.body).then(result => {
          return result.toJSON()
        })
      }
    })
    .then(result => {
      console.log('sending results')
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
