const router = require("express").Router();
const Product = require("../db/models/product");
const Category = require("../db/models/category");

//Fuzzy search is has not been created/implemented within these routes

// match product id
router.param("id", (req, res, next, id) => {
  Product.findById(id, { include: [{ all: true }] })
    .then(product => {
      if (!product) {
        const err = Error("product not found");
        err.status = 404;
        throw err;
      } else {
        req.product = product;
        next();
      }
    })
    .catch(next);
});

// find all products
router.get("/", (req, res, next) => {
  Product.findAll({
    include: [
      {
        all: true
      }
    ]
  })
    .then(products => res.json(products))
    .catch(next);
});

// get a product by id
router.get("/:id", (req, res, next) => {
  res.json(req.product);
});

// delete a product by id
router.delete("/:id", (req, res, next) => {
  req.product
    .destroy()
    .then(() => res.sendStatus(204))
    .catch(next);
});

// update a product by id
router.put("/:id", (req, res, next) => {
  req.product
    .update(req.body)
    .then(product => res.status(201).json(product))
    .catch(next);
});

// create a new product and associate with categories
//req.body.product - contains all necessary product info to create a new product
//req.body.categories - contains an array with category ids (1 or more)
router.post("/", (req, res, next) => {
  let product;
  Product.create(req.body.product)
    .then(productInstance => {
      product = productInstance;
      return Promise.all(
        req.body.categories.map(id => Category.findById(id))
      ).then(resultArray => {
        product.setCategories(resultArray);
        res.sendState(201);
      });
    })
    .catch(next);
});

module.exports = router;
