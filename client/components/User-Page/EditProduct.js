import React, { Component } from 'react'
import { Card, Button, Grid } from 'semantic-ui-react'
import { editProduct } from '../../store'
import { connect } from 'react-redux'

class EditProduct extends Component {
  constructor(props) {
    super(props)
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChangeProduct = this.handleChangeProduct.bind(this)
    this.tempProduct = {}
    this.productId = ''
  }

  handleChange(evt) {
    this.tempProduct[evt.target.name] = evt.target.value
  }

  handleChangeProduct(evt) {
    this.productId = evt.target.value
  }

  handleSubmit(evt) {
    evt.preventDefault()
    this.props.editProduct(this.productId, this.tempProduct)
    this.props.hideForm()
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <Card.Content>
          <Grid padded>
            <Grid.Row>
              <Grid.Column width={9}>
                <div>
                  <h3>
                    Choose Product
                    <select
                      name="product"
                      required="required"
                      onChange={this.handleChangeProduct}
                    >
                      <option>Select Category</option>
                      {this.props.products.map(product => {
                        return (
                          <option value={product.id} key={product.id}>
                            {product.name}
                          </option>
                        )
                      })}
                    </select>
                  </h3>
                  <h3>
                    Name :{' '}
                    <input
                      type="text"
                      name="name"
                      placeholder="Name"
                      onChange={this.handleChange}
                    />
                  </h3>
                  <h3>
                    Author :{' '}
                    <input
                      type="text"
                      name="author"
                      placeholder="Author"
                      onChange={this.handleChange}
                    />
                  </h3>
                  <h3>
                    Description :{' '}
                    <input
                      type="text"
                      name="description"
                      placeholder="Description"
                      onChange={this.handleChange}
                    />
                  </h3>
                  <h3>
                    Price :{' '}
                    <input
                      type="number"
                      name="price"
                      placeholder="Price"
                      onChange={this.handleChange}
                    />
                  </h3>
                </div>
              </Grid.Column>
              <Grid.Column>
                <div>
                  <h3>
                    Quantity :{' '}
                    <input
                      type="number"
                      name="quantity"
                      placeholder="Quantity"
                      onChange={this.handleChange}
                    />
                  </h3>
                  <h3>
                    img URL :
                    <input
                      type="url"
                      name="img"
                      placeholder="img URL"
                      onChange={this.handleChange}
                    />
                  </h3>
                  <h3>
                    Availability:
                    <br />
                    <select name="available" onChange={this.handleChange}>
                      <option>Available</option>
                      <option value="true">True</option>
                      <option value="false">False</option>
                    </select>
                  </h3>
                </div>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Card.Content>
        <Button type="submit">Submit Info</Button>
        <br />
        <br />
      </form>
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
    editProduct: (productId, product) =>
      dispatch(editProduct(productId, product))
  }
}

export default connect(mapState, mapDispatch)(EditProduct)
