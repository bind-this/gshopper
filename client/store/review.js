'use strict'

import axios from 'axios'


/**
 * ACTION TYPES
 */
const GET_REVIEW = 'GET_REVIEW'
const CREATE_REVIEW = 'CREATE_REVIEW'

/**
 * ACTION CREATORS
 */
const getReview = review => ({type: GET_REVIEW, review})
const createReview = review => ({ type: CREATE_REVIEW, review })

/**
 * THUNK CREATORS
 */
export const fetchReview = (productId) =>
  dispatch =>
    axios.get(`/api/reviews/product-review/${productId}`)
      .then(res => dispatch(getReview(res.data)))
      .catch(err => console.log(err))

export const makeReview = (product) =>
  dispatch =>
    axios.post(`/api/reviews`, product)
      .then(res => dispatch(createReview(res.data)))
      .catch(err => console.log(err))

/**
 * REDUCER
 */
export default (state = [], action) => {
  switch (action.type) {

    case GET_REVIEW:
      return action.review

    case CREATE_REVIEW:
      return action.review

    default:
      return state
  }
}
