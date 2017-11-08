// two tests for product redux

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
    price: 799,
    id: 1
  }

  const testProdV2 = {
    name: 'BetterPrimaryApp',
    author: 'creator',
    price: 999,
    id: 1
  }

  beforeEach( () => {
    mockAxios = new MockAdapter(axios)
    store = mockStore(initialState)
  })

  afterEach(() => {
    mockAxios.restore()
    store.clearActions()
  })

  // create and update a product to test post and put
  // delete product as well
  // name, author, description, price, quantity

  it('add product', () => {
    mockAxios.onPost('/api/products/', testProdV1).replyOnce(201, testProdV1)
    return store.dispatch(makeProduct(testProdV1))
    .then( result => {
      const newProduct = result.product
      expect(newProduct.price).to.be.equal(799)
    })
  })


  // it('update product', () => {
  //   // mockAxios.onPut(`/api/products/1`).replyOnce(201)
  //   return store.dispatch(changeProduct(testProdV2))
  //   .then( result => {
  //     console.log(result)
  //   })


  // delete

})
