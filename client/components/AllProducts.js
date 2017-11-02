'use strict'

import React, { Component } from 'react'
import CardList from './CardList'
import { Card, Rating, Grid } from 'semantic-ui-react'
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

      <Grid>
        <Grid.Row>
          <Grid.Column width={3}>
          {/* <Card fluid> */}
            <h2>Filters</h2>
            <h3>Minimum rating</h3>
            <Rating maxRating={5} clearable />
            <h3>Categories</h3>
            Here will be the categories
          {/* </Card> */}
          </Grid.Column>
          <Grid.Column width={13}>
            <CardList products={ products } title={ title } />
          </Grid.Column>
        </Grid.Row>
      </Grid>
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
