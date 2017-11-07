// 'use strict'

// import axios from 'axios'

// /**
//  * ACTION TYPES
//  */
// const GET_PRODUCT = 'GET_PRODUCT'
// const CREATE_PRODUCT = 'CREATE_PRODUCT'
// const EDIT_PRODUCT = 'EDIT_PRODUCT'
// const DELETE_PRODUCT = 'DELETE_PRODUCT'

// /**
//  * ACTION CREATORS
//  */
// const getProduct = product => ({ type: GET_PRODUCT, product })
// const createProduct = product => ({ type: CREATE_PRODUCT, product })
// const editProduct = product => ({ type: EDIT_PRODUCT, product })
// const deleteProduct = product => ({ type: DELETE_PRODUCT, product })

// /**
//  * THUNK CREATORS
//  */
// export const fetchProduct = productId => dispatch =>
//   axios
//     .get(`/api/products/${productId}`)
//     .then(res => dispatch(getProduct(res.data)))
//     .catch(err => console.log(err))

// export const makeProduct = product => dispatch =>
//   axios
//     .post('/api/products/', product)
//     .then(res => dispatch(createProduct(res.data)))
//     .catch(err => console.log(err))

// export const changeProduct = product => dispatch =>
//   axios
//     .put(`/api/products/${product.id}`, product)
//     .then(res => dispatch(editProduct(res.data)))
//     .catch(err => console.log(err))

// /**
//  * REDUCER
//  */
// export default (state = {}, action) => {
//   switch (action.type) {
//     case GET_PRODUCT:
//     case CREATE_PRODUCT:
//     case EDIT_PRODUCT:
//       return action.product

//     case DELETE_PRODUCT:
//     default:
//       return state
//   }
// }
