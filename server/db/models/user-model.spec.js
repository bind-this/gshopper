const { expect, assert } = require('chai')
const db = require('../index')
const User = db.model('user')

// four tests for user model
describe('User model', () => {
  beforeEach(() => {
    return db.sync({force: true})
  })

  describe('email and password fields', () => {
    let testUser
    User.create({
      email: 'uniqueAddress@mail.test',
      password: 'testpw'
    })
    .then(user => {
      testUser = user
    })

    it('email is correct and unique', () => {
      expect(testUser.email).to.be.equal('uniqueAddress@mail.test')
    })

    it('password is a string in db', () => {
      expect(testUser.password).to.be.a('string')
    })

    it('password is salted in db', () => {
      expect(testUser.password).to.be.not.equal('testpw')
    })
  })

  describe('associations', () => {
    it('should have two associations', () => {
      expect(Object.keys(User.associations)).to.deep.equal(['orders', 'reviews'])
    })
  })

  describe('instanceMethods', () => {
    describe('correctPassword', () => {
      let cody

      beforeEach(() => {
        return User.create({
          email: 'cody@puppybook.com',
          password: 'bones'
        })
          .then(user => {
            cody = user
          })
      })

      it('returns true if the password is correct', () => {
        expect(cody.correctPassword('bones')).to.be.equal(true)
      })

      it('returns false if the password is incorrect', () => {
        expect(cody.correctPassword('bonez')).to.be.equal(false)
      })
    }) // end describe('correctPassword')
  }) // end describe('instanceMethods')
}) // end describe('User model')
