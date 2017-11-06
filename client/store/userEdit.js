import axios from 'axios'

/**
 * ACTION TYPES
 */
const GET_USERS = 'GET_USERS'

/**
 * INITIAL STATE
 */
const defaultUsers = []

/**
 * ACTION CREATORS
 */
const getUsers = users => ({ type: GET_USERS, users })

/**
 * THUNK CREATORS
 */

export const fetchUsers = () => dispatch => {
  axios
    .get('/api/users')
    .then(users => {
      dispatch(getUsers(users.data || defaultUsers))
    })
    .catch(err => console.log(err))
}

export const deleteUser = userId => () => {
  axios
    .delete(`/api/users/${userId}`)
    .then()
    .catch(err => console.log(err))
}

export const updatingUser = (userId, updates) => () => {
  console.log('hererere')
  axios
    .put(`/api/users/${userId}`, updates)
    .then()
    .catch(err => console.log(err))
}

export const adminEdit = userId => () => {
  axios
    .put(`/api/users/${userId}`, { admin: true })
    .then()
    .catch(err => console.log(err))
}

/**
 * REDUCER
 */
export default function(state = defaultUsers, action) {
  switch (action.type) {
    case GET_USERS:
      return action.users
    default:
      return state
  }
}
