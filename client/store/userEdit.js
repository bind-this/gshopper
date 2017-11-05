import axios from 'axios'
import history from '../history'

/**
 * ACTION TYPES
 */
const UPDATE_USER = 'UPDATE_USER'

/**
 * INITIAL STATE
 */
const updatedUser = {}

/**
 * ACTION CREATORS
 */

const updateUser = user => ({ type: UPDATE_USER, user })

/**
 * THUNK CREATORS
 */

export const updatingUser = (userId, updates) => dispatch => {
  axios.put(`/api/users/update/${userId}`, updates)
    .then(result => {
      dispatch(updateUser(result))
    })
    .catch(err => console.log(err))
}

/**
 * REDUCER
 */
export default function(state = updatedUser, action) {
  switch (action.type) {
    case UPDATE_USER:
      return action.user
    default:
      return state
  }
}
