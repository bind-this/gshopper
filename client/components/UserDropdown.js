import React from 'react'
import { Menu, Dropdown, Icon } from 'semantic-ui-react'

const UserDropdown = ({ user, tryLogout }) => (
  <Menu.Item>
    <Dropdown item text={`Hi${user.firstName && ', ' + user.firstName}`}>
      <Dropdown.Menu>
        <Dropdown.Item>Account</Dropdown.Item>
        <Dropdown.Item>Orders</Dropdown.Item>
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
