'use strict'

import axios from 'axios'


/**
 * ACTION TYPES
 */
const GET_REVIEW = 'GET_REVIEW'

/**
 * ACTION CREATORS
 */
const getReview = review => ({type: GET_REVIEW, review})

/**
 * THUNK CREATORS
 */
export const fetchReview = (productId) =>
  dispatch =>
    axios.get(`/api/reviews/product-review/${productId}`)
      .then(res => dispatch(getReview(res.data)))
      .catch(err => console.log(err))

export const makeReview = (review, productId) =>
  dispatch =>
    axios.post(`/api/reviews`, review)
      .then(() => axios.get(`/api/reviews/product-review/${productId}`))
      .then(res => dispatch(getReview(res.data)))
      .catch(err => console.log(err))

export const deleteReview = (reviewId, productId) =>
  dispatch =>
    axios.delete(`/api/reviews/${reviewId}`)
      .then(() => axios.get(`/api/reviews/product-review/${productId}`))
      .then(res => dispatch(getReview(res.data)))
      .catch(err => console.log(err))

/**
 * REDUCER
 */
export default (state = [], action) => {
  switch (action.type) {

    case GET_REVIEW:
      return action.review

    default:
      return state
  }
}
