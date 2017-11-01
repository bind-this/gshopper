const router = require("express").Router();
const { User } = require("../db/models");
module.exports = router;

// match product id
/*
- This route was creating errors for 'id' routes below...
- Error referenced ../server/index.js 'promise being create without response given...
- Eliminated this route, used findById in 'id' routes below, error no longer thrown...
*/
// router.param("id", (req, res, next, id) => {
//   User.findOne({
//     where: {
//       id: id,
//       include: [
//         {
//           all: true
//         }
//       ]
//     }
//   })
//     .then(user => {
//       if (!user) {
//         throw HttpError(404);
//       }
//       req.user = user;
//       next();
//     })
//     .catch(next);
// });

//Get all users
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

//Goes here or in index.js?
router.get("/me", (req, res, next) => {
  res.json(req.user);
});

// creates new user - admin only
router.post("/", function(req, res, next) {
  User.create(req.body)
    .then(user => res.status(201).json(user))
    .catch(next);
});

//Signup / user themselves 'creates new user' and also 'auto' logs in
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

// updates user
router.put("/:id", function(req, res, next) {
  User.update(req.body, {
    where: {
      id: req.params.id
    }
  })
    .then(() => res.sendStatus(200))
    .catch(next);
});

// delete user
router.delete("/:id", function(req, res, next) {
  User.destroy({
    where: {
      id: req.params.id
    }
  })
    .then(() => res.sendStatus(200))
    .catch(next);
});

//Login
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

//Logout
router.post("/logout", (req, res, next) => {
  req.logout();
  res.sendStatus(200);
});
