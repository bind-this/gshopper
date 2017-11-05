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

  Order.findOrCreate({
    where: {
      status: 'created',
      userId: req.body.userId
    }
  })
  .spread(order => {
    req.body.orderId = order.id
    const order_product = Order_Product.findOne({where: {
      productId: req.body.productId,
      orderId: order.id
    }}).then(oproduct => {
      if (!oproduct) {
        return Order_Product.create(req.body)
          .then(result => {
            result = result.toJSON()
            console.log(result)
            return result
          })
      } else {
        return oproduct.update(req.body)
          .then(result => {
            result = result.toJSON()
            return result
          })
      }
    })
    .then(result => {
      res.json(result);
    })
  })
  .catch(next);

  // Order.findOrCreate()
  // Order_Product.create(req.body)
  // .then(order_product => res.json(order_product))
  // .catch(next)
})


// router.param to catch :Id
router.param('id', (req, res, next, orderProductId) => {
  Order_Product.findOne({
    where: { id: orderProductId }
  })
    .then(orderProduct => {
      if (!orderProduct) {
        const err = Error('Order Product not found');
        err.status = 404;
        next(err);
      } else {
        req.orderProduct = orderProduct;
        next();
      }
    })
    .catch(next)
});

// GET - find by Id /api/order-products/:id
router.get('/:id', (req, res, next) => {
  res.json(req.orderProduct);
})

// PUT - update an existing order /api/orders/:id
router.put('/:id', (req, res, next) => {
  req.orderProduct.update(req.body)
    .then(orderProduct => res.json(orderProduct))
    .catch(next);
})

  // DELETE - delete an existing orderProduct /api/order-products/:id
router.delete('/:id', (req, res, next) => {
  req.orderProduct.destroy()
    .then(() => res.status(204).end())
    .catch(next);
})

module.exports = router
