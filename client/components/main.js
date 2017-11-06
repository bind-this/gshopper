import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { withRouter, Link } from 'react-router-dom'
import { logout, fetchCategories, fetchProducts } from '../store'
import { Button, Menu, Icon, Label, Image } from 'semantic-ui-react'

import SearchBar from './SearchBar'
import UserDropdown from './UserDropdown.js'
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
    const { children, tryLogout, isLoggedIn, user } = this.props
    return (
      <div>
        <Menu size="large" borderless>
          <Menu.Item fitted onClick={() => history.push('/')}>
            <Image src="/logo.png" size="medium" style={{ padding: '5px' }} />
          </Menu.Item>
          <Menu.Menu position="right">
            <Menu.Item>
              <SearchBar />
            </Menu.Item>
            <Menu.Item name="Cart" onClick={() => history.push('/cart')}>
              <Icon size="big" name="shop" />
              {user.id && user.orders && user.orders.length ? (
                <Label color="teal">
                  {
                    user.orders.filter(order => order.status === 'created')[0]
                      .order_products.length
                  }
                </Label>
              ) : (
                ''
              )}
            </Menu.Item>
            {isLoggedIn ? (
              <UserDropdown user={user} tryLogout={tryLogout} />
            ) : (
              <Menu.Item name="Login" onClick={() => history.push('/login')} />
            )}
            {!isLoggedIn && (
              <Menu.Item>
                <Button color="yellow" onClick={() => history.push('/signup')}>
                  Sign Up
                </Button>
              </Menu.Item>
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
    tryLogout() {
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
  tryLogout: PropTypes.func.isRequired,
  isLoggedIn: PropTypes.bool.isRequired
}
