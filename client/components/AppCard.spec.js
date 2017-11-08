/* global describe beforeEach it */

import { expect } from 'chai'
import React from 'react'
import enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import AppCard from './AppCard'
import store from '../store'
const adapter = new Adapter()
enzyme.configure({ adapter })

describe('AppCard', () => {
  let appCard

  beforeEach(() => {
    appCard = shallow(<AppCard store={store} />)
  })

  it('renders the app in a Segment', () => {
    expect(appCard.find('AppCard').length).to.be.equal(1)
  })
})
