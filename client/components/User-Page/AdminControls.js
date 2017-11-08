import React, { Component } from 'react'
import { Button } from 'semantic-ui-react'
import AddProduct from './AddProduct'
import AddCategory from './AddCategory'
import AddAdmin from './AddAdmin'
import DeleteUser from './DeleteUser'
import EditProduct from './EditProduct'
import DeleteProduct from './DeleteProduct'
import ProductCategory from './ProductCategory'
import { fetchUsers } from '../../store'
import { connect } from 'react-redux'

class AdminControls extends Component {
  constructor() {
    super()
    this.state = {
      newProduct: false,
      editProduct: false,
      deleteProduct: false,
      productCategory: false,
      newCategory: false,
      addAdmin: false,
      deleteUser: false
    }
    this.toggleAdminPanel = this.toggleAdminPanel.bind(this)
  }

  componentDidMount() {
    this.props.fetchUsers()
  }

  toggleAdminPanel = value => {
    this.setState({
      newProduct: value === 'a',
      editProduct: value === 'b',
      deleteProduct: value === 'c',
      productCategory: value === 'd',
      newCategory: value === 'e',
      addAdmin: value === 'f',
      deleteUser: value === 'g'
    })
  }

  render() {
    return (
      <div>
        <div>
          <Button onClick={() => this.toggleAdminPanel('a')}>
            Add New Product
          </Button>
          <Button onClick={() => this.toggleAdminPanel('d')}>
            Add Category to Product
          </Button>
          <Button onClick={() => this.toggleAdminPanel('c')}>
            Delete Product
          </Button>
          <Button onClick={() => this.toggleAdminPanel('b')}>
            Edit Product
          </Button>
          <Button onClick={() => this.toggleAdminPanel('e')}>
            Add New Product Category
          </Button>
          <Button onClick={() => this.toggleAdminPanel('f')}>
            Grant Admin Status
          </Button>
          <Button onClick={() => this.toggleAdminPanel('g')}>
            Delete a User
          </Button>
        </div>
        <div>
          {this.state.newProduct ? (
            <AddProduct hideForm={this.toggleAdminPanel.bind(this)} />
          ) : (
            ''
          )}
        </div>
        <div>
          {this.state.editProduct ? (
            <EditProduct hideForm={this.toggleAdminPanel.bind(this)} />
          ) : (
            ''
          )}
        </div>
        <div>
          {this.state.productCategory ? (
            <ProductCategory hideForm={this.toggleAdminPanel.bind(this)} />
          ) : (
            ''
          )}
        </div>
        <div>
          {this.state.deleteProduct ? (
            <DeleteProduct hideForm={this.toggleAdminPanel.bind(this)} />
          ) : (
            ''
          )}
        </div>
        <div>
          {this.state.newCategory ? (
            <AddCategory hideForm={this.toggleAdminPanel.bind(this)} />
          ) : (
            ''
          )}
        </div>
        <div>
          {this.state.addAdmin ? (
            <AddAdmin hideForm={this.toggleAdminPanel.bind(this)} />
          ) : (
            ''
          )}
        </div>
        <div>
          {this.state.deleteUser ? (
            <DeleteUser hideForm={this.toggleAdminPanel.bind(this)} />
          ) : (
            ''
          )}
        </div>
      </div>
    )
  }
}

const mapState = state => {
  return {
    users: state.users
  }
}

const mapDispatch = dispatch => {
  return {
    fetchUsers: () => dispatch(fetchUsers())
  }
}

export default connect(mapState, mapDispatch)(AdminControls)
