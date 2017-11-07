import axios from 'axios'
// import { getUser } from './user'

/**
 * THUNK CREATORS
 */
export const sendCartItem = cartItemId => dispatch =>
  axios
    .post('/api/order-products/cart', cartItemId)
    .then(
      res => console.log(res) // let's log for now
    )
    .catch(err => console.log(err))

export const removeCartItem = cartItem => dispatch =>
  axios
    .delete('/api/order-products/' + cartItem.id)
    .then(
      res => console.log(res) // let's log for now
    )
    .catch(err => console.log(err))

export const updateCartItem = cartItem => dispatch =>
  axios
    .put('/api/order-products/' + cartItem.id, cartItem)
    .then(res => console.log(res))
    .catch(err => console.log(err))
/**
 * REDUCER
 */
export default function(state = {}, action) {
  switch (action.type) {
    default:
      return state
  }
}
