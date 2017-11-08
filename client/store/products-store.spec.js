// four tests for products redux

import { expect } from 'chai'
import axios from 'axios'
import MockAdapter from 'axios-mock-adapter'
import configureMockStore from 'redux-mock-store'
import thunkMiddleware from 'redux-thunk'
import sinon from 'sinon'
import { getProducts, fetchProducts, addProduct } from './products'

const middlewares = [thunkMiddleware]
const mockStore = configureMockStore(middlewares)

describe('Products redux', () => {
  let store
  let mockAxios

  const initialState = []

  beforeEach(() => {
    mockAxios = new MockAdapter(axios)
    store = mockStore(initialState)
  })

  afterEach(() => {
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
      mockAxios.onGet('/api/products/').replyOnce(200, { name: 'betterApp' })
      return store.dispatch(fetchProducts()).then(() => {
        const actions = store.getActions()
        expect(actions[0].type).to.be.equal('GET_PRODUCTS')
      })
    })

    it('addProduct invokes posts', () => {
      const postTest = () => {
        name: 'postApp'
      }
      const spy = sinon.spy(postTest)
      mockAxios.onPost('/api/products').replyOnce(201, postTest)
      store.dispatch(addProduct(spy()))
      sinon.assert.calledOnce(spy)
    })

    it('incorrect action type reaches default case', () => {
      const getIncorrectProducts = products => ({
        type: 'WRONG_TYPE',
        products
      })
      const badThunk = () => dispatch =>
        axios
          .get('/api/products/')
          .then(res => dispatch(getIncorrectProducts(res.data)))
      mockAxios.onGet('/api/products/').replyOnce(200, { name: 'badApp' })
      return store.dispatch(badThunk()).then(() => {
        const state = store.getState()
        expect(state).to.equal(initialState)
      })
    })
  })
})
