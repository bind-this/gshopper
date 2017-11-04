import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Divider } from 'semantic-ui-react'

import Carousel from 'nuka-carousel'

function LandingPage(props) {
  const products25 = props.products.slice(0, 25)
  return (
    <div>
      {props.user.firstName && (
        <Divider horizontal>Hello, {props.user.firstName}</Divider>
      )}
      <div>Welcome home!</div>
      <Carousel slidesToShow={3} cellAlign="center">
        <img src="http://placehold.it/1000x400/ffffff/c0392b/&text=slide1" />
        <img src="http://placehold.it/1000x400/ffffff/c0392b/&text=slide2" />
        <img src="http://placehold.it/1000x400/ffffff/c0392b/&text=slide3" />
        <img src="http://placehold.it/1000x400/ffffff/c0392b/&text=slide4" />
        <img src="http://placehold.it/1000x400/ffffff/c0392b/&text=slide5" />
        <img src="http://placehold.it/1000x400/ffffff/c0392b/&text=slide6" />
      </Carousel>
      <ul>{products25.map(product => <li>{product.name}</li>)}</ul>
    </div>
  )
}

const mapState = state => ({
  products: state.products,
  user: state.user
})
export default connect(mapState)(LandingPage)
