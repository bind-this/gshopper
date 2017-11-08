import React from 'react'
import { expect } from 'chai'
import enzyme, {shallow} from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

const adapter = new Adapter()
enzyme.configure({adapter})

import { UserDropdown } from './UserDropdown'

describe('UserDropdown home', () => {
  let UserDropdownHome
  beforeEach( () => {
    UserDropdownHome = shallow(<UserDropdown />)
  })
  // 
  // it('has dropdown', () => {
  //   console.log(UserDropdownHome)
  //   expect(UserDropdownHome.find('Dropdown')).to.be.true
  // })
})
