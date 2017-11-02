import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { withRouter, Link } from 'react-router-dom'
import { logout } from '../store'

import { Input, Menu } from 'semantic-ui-react'
/**
 * COMPONENT
 *  The Main component is our 'picture frame' - it displays the navbar and anything
 *  else common to our entire app. The 'picture' inside the frame is the space
 *  rendered out by the component's `children`.
 */
const Main = props => {
  const { children, handleClick, isLoggedIn } = props

  return (
    <div>
      <Menu size="large">
        <Menu.Item name="Logo goes here" href="/" />
        <Menu.Item>
          <Input placeholder="Search..." />
        </Menu.Item>
        {isLoggedIn ? (
          <Menu.Menu position="right">
            {/* The navbar will show these links after you log in */}
            <Menu.Item name="Cart" href="/cart" />
            <Menu.Item name="Home" href="/home" />
            <Menu.Item name="Logout" onClick={handleClick} />
          </Menu.Menu>
        ) : (
          <Menu.Menu position="right">
            {/* The navbar will show these links before you log in */}
            <Menu.Item name="Cart" href="/cart" />
            <Menu.Item name="Login" href="/login" />
            <Menu.Item name="Sign Up" href="/signup" />
          </Menu.Menu>
        )}
      </Menu>
      <Menu size="mini">
        <Menu.Item name="category" href="/category" />
        <Menu.Item name="category" href="/category" />
        <Menu.Item name="category" href="/category" />
        <Menu.Item name="category" href="/category" />
        <Menu.Item name="category" href="/category" />
        <Menu.Item name="category" href="/category" />
        <Menu.Item name="category" href="/category" />
        <Menu.Item name="category" href="/category" />
        <Menu.Item name="category" href="/category" />
        <Menu.Item name="category" href="/category" />
      </Menu>
      <hr />
      {children}
    </div>
  )
}

/**
 * CONTAINER
 */
const mapState = state => {
  return {
    isLoggedIn: !!state.user.id
  }
}

const mapDispatch = dispatch => {
  return {
    handleClick() {
      dispatch(logout())
    }
  }
}

// The `withRouter` wrapper makes sure that updates are not blocked
// when the url changes
export default withRouter(connect(mapState, mapDispatch)(Main))

/**
 * PROP TYPES
 */
Main.propTypes = {
  children: PropTypes.object,
  handleClick: PropTypes.func.isRequired,
  isLoggedIn: PropTypes.bool.isRequired
}
