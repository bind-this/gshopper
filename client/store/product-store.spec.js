// product store tests

import { expect } from 'chai'
import axios from 'axios'
import MockAdapter from 'axios-mock-adapter'
import configureMockStore from 'redux-mock-store'
import thunkMiddleware from 'redux-thunk'
import history from '../history'
import sinon from 'sinon'
import productReducer, { getProduct, createProduct, editProduct, deleteProduct, fetchProduct, makeProduct, changeProduct, removeProduct } from './product'

const middlewares = [thunkMiddleware]
const mockStore = configureMockStore(middlewares)

describe('Product redux', () => {
  let store
  let mockAxios

  const initialState = []

  const testProdV1 = {
    name: 'primaryApp',
    price: 799
  }

  const testProdV2 = {
    name: 'BetterPrimaryApp',
    author: 'creator',
    price: 999
  }

  const testProdId

  beforeEach( () => {
    mockAxios = new MockAdapter(axios)
    store = mockStore(initialState)
    // mockAxios.onPost('/api/products/').replyOnce(201, testProd)
    store.dispatch(makeProduct(testProdV1))
    .then( product => {
      console.log(product)
      testProdId = product.id
      return testProdId
    })
  })

  afterEach(() => {
    mockAxios.restore()
    store.clearActions()
  })

  // make and update a product to test post and put
  // delete product as well
  // name, author, description, price, quantity

  // it('add product', () => {
  //   mockAxios.onPost('/api/products/').replyOnce(201, testProd)
  //   return store.dispatch(makeProduct(testProd))
  //   .then( result => {
  //     expect(result.product.price).to.be.equal(799)
  //   })
  // })

  it('get product', () => {
    mockAxios.onGet(`/api/products/${testProdId}`).replyOnce(200, {name: 'primaryApp'})
    .then( () => {
      const state = getState()
    })
  })

  // it('update product', () => {
  //
  // })

  // delete

})
