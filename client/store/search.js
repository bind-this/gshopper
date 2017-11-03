import axios from 'axios'

/**
 * ACTION TYPES
 */
const SEARCH_RESET = 'SEARCH_RESET'
const RESULT_SELECTED = 'RESULT_SELECTED'
const SEARCH_CHANGED = 'SEARCH_CHANGED'

/**
 * INITIAL STATE
 */
const defaultState = { isLoading: false, results: [], value: '' }

/**
 * ACTION CREATORS
 */
const searchReset = () => ({ type: SEARCH_RESET })
const resultSelected = (e, { result }) => ({ type: RESULT_SELECTED, result })
const searchChanged = (e, { value }) => ({ type: SEARCH_CHANGED, value })
/**
 * THUNK CREATORS
 */
export const me = () => dispatch =>
  axios
    .get('/auth/me')
    .then(res => dispatch(getUser(res.data || defaultState)))
    .catch(err => console.log(err))

/**
 * REDUCER
 */
export default function(state = defaultState, action) {
  switch (action.type) {
    case SEARCH_RESET:
      return defaultState
    case RESULT_SELECTED:
      return Object.assign({}, state, { value: action.title })
    case SEARCH_CHANGED:
      return Object.assign({}, state, { isLoading: true, value: action.value })
    default:
      return state
  }
}
