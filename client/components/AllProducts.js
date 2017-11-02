'use strict'

import React, { Component } from 'react'
import CardList from './CardList'
import { Card, Rating } from 'semantic-ui-react'
import { connect } from 'react-redux'

class AllProducts extends Component {
  constructor(props) {
    super(props);
  }

  render() {

    const title = 'All Products'
    const products = this.props.products
    const categories = this.props.categories

    return (
      <div>
        <Card fluid>
          <h2>Filters</h2>
          <h3>Minimum rating</h3>
          <Rating maxRating={5} clearable />
          <h3>Categories</h3>
          Here will be the categories
        </Card>
        <CardList products={ products } title={ title } />
      </div>
    )
  }
}

const mapState = (state) => {
  return {
    products: state.products,
    categories: state.categories
  }
}

export default connect(mapState)(AllProducts)
