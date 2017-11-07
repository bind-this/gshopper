import React, { Component } from 'react'
import { Button } from 'semantic-ui-react'
import { deleteProduct } from '../../store'
import { connect } from 'react-redux'

class DeleteProduct extends Component {
  constructor(props) {
    super(props)
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.userId = null
  }

  handleChange(evt) {
    this.userId = evt.target.value
  }

  handleSubmit(evt) {
    evt.preventDefault()
    this.props.deleteProduct(this.userId)
    this.props.hideForm()
  }

  render() {
    return (
      <h3>
        <form onSubmit={this.handleSubmit}>
          <select name="user" required="required" onChange={this.handleChange}>
            <option>Select User</option>
            {this.props.products.map(product => {
              return (
                <option value={product.id} key={product.id}>
                  {product.name}
                </option>
              )
            })}
          </select>
          <Button type="submit">Delete</Button>
        </form>
      </h3>
    )
  }
}

const mapState = state => {
  return {
    products: state.products
  }
}

const mapDispatch = dispatch => {
  return {
    deleteProduct: id => dispatch(deleteProduct(id))
  }
}

export default connect(mapState, mapDispatch)(DeleteProduct)
