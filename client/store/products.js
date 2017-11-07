import axios from 'axios'

/**
 * ACTION TYPES
 */
const GET_PRODUCTS = 'GET_PRODUCTS'

/**
 * INITIAL STATE
 */
const defaultProducts = []

/**
 * ACTION CREATORS
 */
const getProducts = products => ({ type: GET_PRODUCTS, products })

/**
 * THUNK CREATORS
 */
export const fetchProducts = () => dispatch =>
  axios
    .get('/api/products/')
    .then(res => dispatch(getProducts(res.data || defaultProducts)))
    .catch(err => console.log(err))

export const addProduct = product => () => {
  axios
    .post('/api/products', product)
    .then()
    .catch(err => console.log(err))
}

export const addCategoryToProduct = categoryProduct => () => {
  axios
    .post('/api/products/category', categoryProduct)
    .then()
    .catch(err => console.log(err))
}

export const editProduct = (productId, product) => () =>
  axios
    .put(`/api/products/${productId}`, product)
    .then()
    .catch(err => console.log(err))

export const deleteProduct = productId => () =>
  axios
    .delete(`/api/products/${productId}`)
    .then()
    .catch(err => console.log(err))

/**
 * REDUCER
 */
export default function(state = defaultProducts, action) {
  switch (action.type) {
    case GET_PRODUCTS:
      return action.products
    default:
      return state
  }
}
