'use strict'

import React, { Component } from 'react'
import CardList from './CardList'
import { Rating, Grid, Sticky, Input, Label, Dropdown } from 'semantic-ui-react'

import { connect } from 'react-redux'
import _ from 'lodash'
import history from '../history'

export class AllProducts extends Component {

  constructor(props) {
    super(props);
    this.handleFilterChange = this.handleFilterChange.bind(this)
    this.handleRating = this.handleRating.bind(this)
    this.handleFormChange = this.handleFormChange.bind(this)
  }

  state = {}
  handleContextRef = contextRef => this.setState({ contextRef })

  handleFilterChange (data) {
    // this.setState({categories: data.value})
    if (data.value.length === 0) history.push(location.pathname)
    else history.push(location.pathname + '?category=' + data.value.join('&category='))
  }

  handleRating (data) {
    history.push(location.pathname + '?rating=' + data.rating)
  }

  handleFormChange (evt) {
    // this.setState({[evt.target.name]: evt.target.value})
    history.push(location.pathname + '?' + evt.target.name + '=' + evt.target.value * 100)
  }

  render() {
    let title = 'All Products'
    const products = this.props.products
    const allCategories = this.props.categories
    const { contextRef } = this.state

    // Let's get our search filters from the URL
    const { search } = this.props.location
    const params = new URLSearchParams(search)
    let categoryFilters = params.getAll('category')
    const query = params.get('search')
    const minprice = params.get('minprice')
    const maxprice = params.get('maxprice')

    categoryFilters = categoryFilters.map(cat => +cat)

    // filtering by... filters
    let filteredProducts = products.filter(product => {
      if (categoryFilters.length == 0) return true
      let categoriesOfProductId = product.categories.map(category => category.id)
      categoryFilters = new Set(categoryFilters)
      categoriesOfProductId = new Set(categoriesOfProductId);
      let intersection = new Set([...categoryFilters].filter(x => categoriesOfProductId.has(x)))
      intersection = Array.from(intersection)
      if (intersection.length > 0) return true
      else return false
    })
    .filter(priceProduct => priceProduct.price >= minprice || !minprice)
    .filter(priceProduct => priceProduct.price <= maxprice || !maxprice)

    categoryFilters = Array.from(categoryFilters)
    if (allCategories.length && categoryFilters.length) {
      title = allCategories.filter(cat => categoryFilters.includes(cat.id)).map(cate => cate.name).join(', ')
    }

    // Search filtering by query
    const re = new RegExp(_.escapeRegExp(query), 'i')
    const isMatch = result => re.test(result.name)

    filteredProducts = _.filter(filteredProducts, isMatch)

    // Let's make the options for the dropdown
    const options = []
    allCategories.forEach(singleCategory => options.push({key: singleCategory.name, text: singleCategory.name, value: singleCategory.id}))

    return (
      <div ref={this.handleContextRef}>
        <Grid divided padded relaxed columns="equal">
          <Grid.Row>
            <Grid.Column>
              <Sticky context={contextRef} offset={40}>
                <h1>Filters</h1>
                <form onChange={this.handleFormChange}>
                <h3>Minimum rating</h3>
                <Rating maxRating={5} clearable onRate={(evt, data) => this.handleRating(data)} />
                <h3>Price</h3>
                <Input labelPosition="right" type="text" placeholder="Minimum">
                  <Label basic>$</Label>
                  <input name="minprice" defaultValue={minprice / 100 || ''} />
                </Input>
                <Input labelPosition="right" type="text" placeholder="Maximum">
                  <Label basic>$</Label>
                  <input name="maxprice" defaultValue={maxprice / 100 || ''} />
                </Input>
                <h3>Categories</h3>
                    <Dropdown defaultValue={categoryFilters} placeholder='Categories' fluid multiple selection options={options} onChange={(evt, data) => this.handleFilterChange(data)} />
                </form>
              </Sticky>
            </Grid.Column>
            <Grid.Column width={13}>
              <CardList
                products={filteredProducts}
                search={query}
                title={title}
              />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
    )
  }
}

const mapState = state => {
  return {
    products: state.products,
    categories: state.categories
  }
}

export default connect(mapState)(AllProducts)
