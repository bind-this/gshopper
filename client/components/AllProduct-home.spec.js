import React from 'react'
import { expect } from 'chai'
import enzyme, {shallow} from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import { AllProducts } from './AllProducts'

const adapter = new Adapter()
enzyme.configure({adapter})


describe('All products home', () => {
  let allProductsHome

  beforeEach( () => {
    allProductsHome = shallow(<AllProducts location={'search'}/>)
  })

  // it('has bound functions', () => {
  //   expect(AllProducts.instance().handleFilterChange.hasOwnProperty('protoype')).to.be.false
  // })
  //
  // it('has a Filter title', () => {
    // expect(allProductshome.find('h1').text()).to.be.equal('Filters')
  // })


})
