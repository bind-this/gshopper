import { expect } from 'chai'
import axios from 'axios'
import MockAdapter from 'axios-mock-adapter'
import configureMockStore from 'redux-mock-store'
import thunkMiddleware from 'redux-thunk'
import history from '../history'
import sinon from 'sinon'
import { getProducts, fetchProducts, addProduct } from './products'

const middlewares = [thunkMiddleware]
const mockStore = configureMockStore(middlewares)

// REACT
// checks visual content
// checks props in components
// checks for initial state
// checks for onchange state changing functions

// REDUX
// actions, check for what actions are returned, type check
// dispatched actions are properly sent
// thunks interact with db correctly
// check if reducer cases properly update store state

describe('Products redux', () => {
  let store
  let mockAxios

  const initialState = []

  beforeEach( () => {
    mockAxios = new MockAdapter(axios)
    store = mockStore(initialState)
  })

  afterEach( () => {
    mockAxios.restore()
    store.clearActions()
  })

  let testProduct = 'bestapp'
  describe('actions', () => {
    it('action creator', () => {
      expect(getProducts(testProduct)).to.deep.equal({
        type: 'GET_PRODUCTS',
        products: 'bestapp'
      })
    })
  })

  describe('thunks', () => {

    it('fetchProducts eventually dispatches the GET_PRODUCTS action', () => {
      mockAxios.onGet('/api/products/').replyOnce(200, {name: 'betterApp'})
      return store.dispatch(fetchProducts())
      .then( () => {
        const actions = store.getActions()
        expect(actions[0].type).to.be.equal('GET_PRODUCTS')
      })
    })

    it('addProduct invokes posts', () => {
      const spy = sinon.spy()
      const postTest = {
        name: 'postApp'
      }
      mockAxios.onPost('/api/products').replyOnce(201, postTest)
      store.dispatch(addProduct(postTest), spy)
    })

    it('incorrect action type reaches default case', () => {
      const getIncorrectProducts = products => ({type: 'WRONG_TYPE', products})
      const badThunk = () => dispatch =>
        axios.get('/api/products/')
        .then(res => dispatch(getIncorrectProducts(res.data)))
      mockAxios.onGet('/api/products/').replyOnce(200, {name: 'badApp'})
      return store.dispatch(badThunk())
      .then( () => {
        const state = store.getState()
        expect(state).to.equal(initialState)
      })
    })

  })

})
