import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Divider } from 'semantic-ui-react'

function LandingPage(props) {
  const products25 = props.products.slice(0, 25)
  return (
    <div>
      {props.user.firstName && (
        <Divider horizontal>Hello, {props.user.firstName}</Divider>
      )}
      <div>Welcome home!</div>
      <ul>{products25.map(product => <li>{product.name}</li>)}</ul>
    </div>
  )
}

const mapState = state => ({
  products: state.products,
  user: state.user
})
export default connect(mapState)(LandingPage)
