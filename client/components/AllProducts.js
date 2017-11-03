'use strict'

import React, { Component } from 'react'
import CardList from './CardList'
import { Card, Rating, Grid, Sticky, Checkbox, Input, Label } from 'semantic-ui-react'
import { connect } from 'react-redux'

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

    return (


        <div ref={this.handleContextRef}>
      <Grid divided padded relaxed columns='equal'>
        <Grid.Row>
          <Grid.Column>
            <Sticky context={contextRef}>
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
                  { categories.map(category => <div><Checkbox key={category.id} defaultChecked toggle /> {category.name}</div>) }
            </Sticky>
          </Grid.Column>
          <Grid.Column width={13}>
            <CardList products={ products } title={ title } />
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
