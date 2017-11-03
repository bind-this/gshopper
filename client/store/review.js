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
export const fetchReview = (reviewId) =>
  dispatch =>
    axios.get(`/api/review/${reviewId}`)
      .then(res => dispatch(getReview(res.data)))
      .catch(err => console.log(err))

/**
 * REDUCER
 */
export default (state = {}, action) => {
  switch (action.type) {

    case GET_REVIEW:
      return action.review

    default:
      return state
  }
}
