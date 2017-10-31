const router = require("express").Router();
const { Category } = require("../db/models");

//Set variable to category instance
router.param("id", (req, res, next, id) => {
  Category.findOne({
    where: { id: id },
    include: [{ all: true }]
  })
    .then(category => {
      if (!category) {
        const err = Error("category not found");
        err.status = 404;
        next(err);
      } else {
        req.category = category;
        next();
      }
    })
    .catch(next);
});

//get all categories
router.get("/", (req, res, next) => {
  Category.findAll()
    .then(categories => res.status(200).json(categories))
    .catch(next);
});

//create new category
router.post("/", (req, res, next) => {
  Category.create(req.body)
    .then(category => res.json(category))
    .catch(next);
});

//get one category (by id) - (and eager load associated products - see router.param)
router.get("/:id", (req, res, next) => {
  res.json(req.category).catch(next);
});

//deletes one category (by id)
router.delete("/:id", (req, res, next) => {
  req.category
    .destroy()
    .then(deleted => res.sendStatus(204))
    .catch(next);
});

//updates one category (by id)
router.put("/:id", (req, res, next) => {
  req.category.update(req.body)
    .then(category => res.json(category))
    .catch(next);
});

module.exports = router;
