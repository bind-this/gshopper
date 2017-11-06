const router = require('express').Router()
const { Category } = require('../db/models')

//PARAM - finds category by id, sets instance to req.category
router.param('id', (req, res, next, id) => {
  Category.findById(id, { include: [{ all: true }] })
    .then(category => {
      if (!category) {
        const err = Error('category not found')
        err.status = 404
        throw err
      } else {
        req.category = category
        next()
      }
    })
    .catch(next)
})

//GET - gets all categories
router.get('/', (req, res, next) => {
  Category.findAll()
    .then(categories => res.status(200).json(categories))
    .catch(next)
})

//Post - creates new category
router.post('/', (req, res, next) => {
  Category.create(req.body)
    .then(category => res.json(category))
    .catch(next)
})

//GET - gets category by id, eager loads all products
router.get('/:id', (req, res, next) => {
  res.json(req.category)
})

//DELETE - deletes category by id
router.delete('/:id', (req, res, next) => {
  req.category
    .destroy()
    .then(() => res.sendStatus(204))
    .catch(next)
})

//PUT - updates category by id
router.put('/:id', (req, res, next) => {
  req.category
    .update(req.body)
    .then(category => res.json(category))
    .catch(next)
})

module.exports = router
