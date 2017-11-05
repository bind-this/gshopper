import axios from 'axios'
import history from '../history'
import { getUser } from './user'

/**
 * ACTION TYPES
 */
const UPDATE_CART_ITEM = 'UPDATE_CART_ITEM'

/**
 * ACTION CREATORS
 */
const updateCartItem = cartItem => ({type: UPDATE_CART_ITEM, cartItem})

/**
 * THUNK CREATORS
 */
export const sendCartItem = (cartItem) =>
  dispatch =>
    axios.post('/api/order-products/cart', cartItem)
      .then(res =>
        dispatch(getUser()))
        // dispatch(getUser(res.data || defaultCart)))
      .catch(err => console.log(err))

/**
 * REDUCER
 */
export default function (state = {}, action) {
  switch (action.type) {
    case UPDATE_CART_ITEM:
      return action.cartItem
    default:
      return state
  }
}
