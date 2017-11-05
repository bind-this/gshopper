import React from 'react'
import { Menu, Dropdown, Icon, Image } from 'semantic-ui-react'
import history from '../history'

const UserDropdown = ({ user, tryLogout }) => (
  <Menu.Item>
    <Dropdown item text={`Hi${user.firstName && ', ' + user.firstName}`}>
      <Dropdown.Menu>
        <Dropdown.Item onClick={() => history.push('/user')}>
          Account
        </Dropdown.Item>
        <Dropdown.Item onClick={() => history.push('/orders')}>
          Orders
        </Dropdown.Item>
        <Dropdown.Item onClick={tryLogout}>Sign Out</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
    {user.img ? (
      <Image src={user.img} shape="circular" />
    ) : (
      <Icon name="user circle outline" size="big" />
    )}
  </Menu.Item>
)

export default UserDropdown
