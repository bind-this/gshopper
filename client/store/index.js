'use strict'

import { createStore, combineReducers, applyMiddleware } from 'redux'
import createLogger from 'redux-logger'
import thunkMiddleware from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import user from './user'
import product from './product'
import products from './products'
import categories from './categories'
import review from './review'
import users from './userEdit'
import orders from './orders'
import cart from './cart'

const reducer = combineReducers({
  products,
  product,
  categories,
  user,
  orders,
  cart,
  users,
  review
})

const middleware = composeWithDevTools(
  applyMiddleware(thunkMiddleware, createLogger({ collapsed: true }))
)


const store = createStore(reducer, middleware)

export default store
export * from './user'
export * from './product'
export * from './products'
export * from './categories'
export * from './review'
export * from './userEdit'
export * from './orders'
export * from './cart'
