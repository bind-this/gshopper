'use strict'

import React, { Component } from 'react'
import CardList from './CardList'
import { Card, Rating, Grid, Sticky, Checkbox, Input, Label, Image, Button } from 'semantic-ui-react'
import { connect } from 'react-redux'
import _ from 'lodash'

class UserPage extends Component {
  constructor(props) {
    super(props);
  }

  state = {}
  handleContextRef = contextRef => this.setState({ contextRef })

  render() {
    console.log(this.props.user)
    // const title = 'All Products'
    // const products = this.props.products
    // const categories = this.props.categories

    // // Let's get our search filters from the URL
    // const { search } = this.props.location
    // const params = new URLSearchParams(search)
    // const category = params.get('category')
    // const query = params.get('search')


    // // filtering by... filters
    // // let categoryNames;
    // let filteredProducts = products.filter(product => {
    //   if (!category) return true
    //   const categoryOfProduct = product.categories.map(category => category.id)
    //   // categoryNames = categories.filter(cat => categoryOfProduct.includes(cat.id) ).map(cat => cat.name).join(', ')
    //   return categoryOfProduct.includes(+category)
    // })

    // // Search filtering by query
    // const re = new RegExp(_.escapeRegExp(query), 'i')
    // const isMatch = result => re.test(result.name)

    // filteredProducts = _.filter(filteredProducts, isMatch)

    // // console.log(categoryNames)

    const user = this.props.user
    return (

    <Grid celled padded >
    <Grid.Row>
      <Grid.Column width={3}>
        <Image size='small' centered src={user.img} />
      </Grid.Column>
      <Grid.Column width={8}>
        <h3> User Name: {user.firstName} {user.lastName} </h3>
        <h3> Email: {user.email} </h3>
        <h3> Address: {user.address} </h3>
        <h3> City: {user.city} </h3>
        <h3> Zip: {user.zip} </h3>
        <Button>Edit User Info</Button>
      </Grid.Column>
      <Grid.Column width={4}>
        <h2> SHOPPING CART HERE</h2>
        <Button size="tiny">SOME FUNCTIONS</Button>
      </Grid.Column>
    </Grid.Row>
    <Grid.Row>
      <Grid.Column width={13}>
        <h3> Order History</h3>
        <h3> Email: {user.email} </h3>
        <Button size="tiny" >SOME FUNCTIONS</Button>
      </Grid.Column>
    </Grid.Row>
    </Grid >
    )
  }
}

const mapState = (state) => {
  return {
    products: state.products,
    categories: state.categories,
    user: state.user
  }
}

export default connect(mapState)(UserPage)
