'use strict'

import React, { Component } from 'react'
import CardList from './CardList'
import { Card, Rating, Grid, Sticky, Checkbox, Input, Label } from 'semantic-ui-react'
import { connect } from 'react-redux'
import _ from 'lodash'

class AllProducts extends Component {
  constructor(props) {
    super(props);
  }

  state = {}
  handleContextRef = contextRef => this.setState({ contextRef })

  render() {

    const title = 'All Products'
    const products = this.props.products
    const categories = this.props.categories
    const { contextRef } = this.state

    // Let's get our search filters from the URL
    const { search } = this.props.location
    const params = new URLSearchParams(search)
    const category = params.get('category')
    const query = params.get('search')


    // filtering by... filters
    // let categoryNames;
    let filteredProducts = products.filter(product => {
      if (!category) return true
      const categoryOfProduct = product.categories.map(category => category.id)
      // categoryNames = categories.filter(cat => categoryOfProduct.includes(cat.id) ).map(cat => cat.name).join(', ')
      return categoryOfProduct.includes(+category)
    })

    // Search filtering by query
    const re = new RegExp(_.escapeRegExp(query), 'i')
    const isMatch = result => re.test(result.name)

    filteredProducts = _.filter(filteredProducts, isMatch)

    console.log(categoryNames)


    return (

    <div ref={this.handleContextRef}>
      <Grid divided padded relaxed columns='equal'>
        <Grid.Row>
          <Grid.Column>
            <Sticky context={contextRef} offset={40}>
              <h1>Filters</h1>
              <h3>Minimum rating</h3>
              <Rating maxRating={5} clearable />
              <h3>Price</h3>
              <Input labelPosition='right' type='text' placeholder='Minimum'>
                <Label basic>$</Label>
                <input />
              </Input>
              <Input labelPosition='right' type='text' placeholder='Maximum'>
                <Label basic>$</Label>
                <input />
              </Input>
              <h3>Categories</h3>
                  { categories.map(category => <div key={category.id}><Checkbox defaultChecked toggle /> {category.name}</div>) }
            </Sticky>
          </Grid.Column>
          <Grid.Column width={13}>
            <CardList products={ filteredProducts } search={query} category={categoryNames} title={ title } />
          </Grid.Column>
        </Grid.Row>
      </Grid>
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
