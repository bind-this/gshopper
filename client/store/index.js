import { createStore, combineReducers, applyMiddleware } from 'redux'
import createLogger from 'redux-logger'
import thunkMiddleware from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import user from './user'
import products from './products'
import categories from './categories'
import users from './userEdit'
import orders from './orders'
import cart from './cart'

const reducer = combineReducers({
  products,
  categories,
  user,
  orders,
  users,
  cart
})
const middleware = composeWithDevTools(
  applyMiddleware(thunkMiddleware, createLogger({ collapsed: true }))
)
const store = createStore(reducer, middleware)

export default store
export * from './user'
export * from './products'
export * from './categories'
export * from './userEdit'
export * from './orders'
export * from './cart'
