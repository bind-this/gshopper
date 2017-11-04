import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { withRouter, Link } from 'react-router-dom'
import { logout, fetchCategories, fetchProducts } from '../store'
import { Input, Menu, Icon, Label, Image } from 'semantic-ui-react'

import SearchBar from './SearchBar'
import history from '../history'

/**
 * COMPONENT
 *  The Main component is our 'picture frame' - it displays the navbar and anything
 *  else common to our entire app. The 'picture' inside the frame is the space
 *  rendered out by the component's `children`.
 */
class Main extends Component {
  componentDidMount() {
    !this.props.products.length && this.props.fetchProducts()
    !this.props.categories.length && this.props.fetchCategories()
  }

  render() {
    const { children, handleClick, isLoggedIn } = this.props
    return (
      <div>
        <Menu size="large">
          <Menu.Item fitted onClick={() => history.push('/')}>
            <Image src="/logo.png" size="medium" />
          </Menu.Item>
          <Menu.Menu position="right">
            <Menu.Item>
              <SearchBar />
            </Menu.Item>
            <Menu.Item name="Cart" onClick={() => history.push('/cart')}>
              <Icon size="big" name="shop" />
              <Label color="teal">99+</Label>
            </Menu.Item>
            {isLoggedIn ? (
              <Menu.Item name="Logout" onClick={handleClick} />
            ) : (
              <Menu.Item name="Login" onClick={() => history.push('/login')} />
            )}
            {!isLoggedIn && (
              <Menu.Item
                name="Sign Up"
                onClick={() => history.push('/signup')}
              />
            )}
          </Menu.Menu>
        </Menu>
        {children}
      </div>
    )
  }
}

/**
 * CONTAINER
 */
const mapState = state => {
  return {
    isLoggedIn: !!state.user.id,
    products: state.products,
    categories: state.categories,
    user: state.user
  }
}

const mapDispatch = dispatch => {
  return {
    handleClick() {
      dispatch(logout())
    },
    fetchProducts: () => dispatch(fetchProducts()),
    fetchCategories: () => dispatch(fetchCategories())
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
