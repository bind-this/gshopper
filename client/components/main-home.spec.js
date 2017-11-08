// main home tests

import React from 'react'
import { expect } from 'chai'
import enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

const adapter = new Adapter()
enzyme.configure({ adapter })

import sinon from 'sinon'

import Main from './main'
import SearchBar from './SearchBar'

// check if mapStatetoprops is correct
// check if it has a function
// check if functions are bound correctly
// check props passing
// check if something is a form
// check if forms have onchange or onsubmit functions

// check for SearchBar
describe('Main components', () => {
  let Mainhome
  beforeEach(() => {
    Mainhome = shallow(<Main />)
  })

  it('has SearchBar', () => {
    expect(Mainhome.length).to.be.equal(1)
  })
})
// check isLoggedIn boolean status and if rendered parts are there

// "test": "NODE_ENV='test' DATABASE_URL='postgres://localhost:5432/bind-this-gshopper-test' mocha ./server/**/*.spec.js ./server/**/**/*.spec.js ./client/**/*.spec.js --compilers js:babel-register"
