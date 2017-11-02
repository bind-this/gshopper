const router = require("express").Router();
const { User } = require("../db/models");
module.exports = router;

//router.param
/*
- This route was creating errors for 'id' routes below...
- Error referenced ../server/index.js 'promise being create without response given...
- Eliminated this route, used findById in 'id' routes below, error no longer thrown...
*/


//Get - all users, eager loads associations
router.get("/", (req, res, next) => {
  User.findAll(
    {
      attributes: ["id", "email"]
    },
    {
      include: [{ all: true }]
    }
  )
    .then(users => res.json(users))
    .catch(next);
});

//Get - sends current logged in user's information
router.get("/me", (req, res, next) => {
  res.json(req.user);
});

//POST - creates new user
router.post("/", function(req, res, next) {
  User.create(req.body)
    .then(user => res.status(201).json(user))
    .catch(next);
});

//Post - creates new user, logs new user in
router.post("/signup", (req, res, next) => {
  User.create(req.body)
    .then(user => {
      req.login(user, err => {
        if (err) next(err);
        else res.json(user);
      });
    })
    .catch(next);
});

//PUT - updates user by id
router.put("/:id", function(req, res, next) {
  User.update(req.body, {
    where: {
      id: req.params.id
    }
  })
    .then(() => res.sendStatus(200))
    .catch(next);
});

//DELETE - delets user by id
router.delete("/:id", function(req, res, next) {
  User.destroy({
    where: {
      id: req.params.id
    }
  })
    .then(() => res.sendStatus(200))
    .catch(next);
});

//POST - logs user in
router.post("/login", (req, res, next) => {
  User.findOne({
    where: {
      email: req.body.email
    }
  })
    .then(user => {
      if (!user) res.status(401).send("User not found");
      else if (!user.correctPassword(req.body.password))
        res.status(401).send("Incorrect password");
      else {
        req.login(user, err => {
          if (err) next(err);
          else res.json(user);
        });
      }
    })
    .catch(next);
});

//POST - logs user out
router.post("/logout", (req, res, next) => {
  req.logout();
  res.sendStatus(200);
});
