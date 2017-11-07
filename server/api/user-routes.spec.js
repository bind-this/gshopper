// // route test specs
//
// // IMPORTS
// // react, lodash?, chai/mocha, enzyme for shallow copies
// // components and reducers to be tested
// // using supertest for routes
// // npm install supertest --save-dev
//
//
// // check several routes for user and products
// // check cart paths
// // check reviews with db
//
// import { User } from '../db/models'
// // import router from './'
// import { expect } from 'chai'
// const app = require('../')
// const supertest = require('supertest')
//
//
// describe('User routes', () => {
//   // beforeEach( () => {
//   //   User.reset()
//   // })
//
//   let router = supertest(app)
//
//   describe('all users', () => {
//     it('GET responds with all users', () => {
//       return router
//         .get('/users/')
//         // .expect(200)
//         // .expect('Content-type', /json/)
//         .expect( (res) => {
//           console.log(res.body)
//           expect(res.body.length).to.be.at.least(1)
//         })
//     })
//   })
//
//     // it('should eager load all users', () => {
//     //
//     // })
//
// })
