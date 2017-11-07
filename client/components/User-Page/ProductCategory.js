import React, { Component } from 'react'
import { Button } from 'semantic-ui-react'
import { addCategoryToProduct } from '../../store'
import { connect } from 'react-redux'

class ProductCategory extends Component {
  constructor(props) {
    super(props)
    this.handleChangeCategory = this.handleChangeCategory.bind(this)
    this.handleChangeProduct = this.handleChangeProduct.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.tempCategoryProduct = {}
  }

  handleChangeCategory(evt) {
    this.tempCategoryProduct[evt.target.name] = evt.target.value
  }

  handleChangeProduct(evt) {
    this.tempCategoryProduct[evt.target.name] = evt.target.value
    console.log(this.tempCategoryProduct)
  }

  handleSubmit(evt) {
    evt.preventDefault()
    this.props.addCategoryToProduct(this.tempCategoryProduct)
    this.props.hideForm()
  }

  render() {
    return (
      <h3>
        <form onSubmit={this.handleSubmit}>
          <select
            name="category"
            required="required"
            onChange={this.handleChangeCategory}
          >
            <option>Select Category</option>
            {this.props.categories.map(category => {
              return (
                <option value={category.id} key={category.id}>
                  {category.name}
                </option>
              )
            })}
          </select>
          <select
            name="product"
            required="required"
            onChange={this.handleChangeProduct}
          >
            <option>Select Product</option>
            {this.props.products.map(product => {
              return (
                <option value={product.id} key={product.id}>
                  {product.name}
                </option>
              )
            })}
          </select>
          <Button type="submit">Add Category to Product</Button>
        </form>
      </h3>
    )
  }
}

const mapState = state => {
  return {
    products: state.products,
    categories: state.categories
  }
}

const mapDispatch = dispatch => {
  return {
    addCategoryToProduct: categoryProduct =>
      dispatch(addCategoryToProduct(categoryProduct))
  }
}

export default connect(mapState, mapDispatch)(ProductCategory)
