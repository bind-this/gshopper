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
      newProductShow: false,
      editProduct: false,
      deleteProductShow: false,
      productCategory: false,
      newCategoryShow: false,
      addAdminShow: false,
      deleteUserShow: false
    }
    this.toggleNewProduct = this.toggleNewProduct.bind(this)
    this.toggleEditProduct = this.toggleEditProduct.bind(this)
    this.toggleDeleteProduct = this.toggleDeleteProduct.bind(this)
    this.toggleNewCategory = this.toggleNewCategory.bind(this)
    this.toggleAddAdmin = this.toggleAddAdmin.bind(this)
    this.toggleDeleteUser = this.toggleDeleteUser.bind(this)
    this.toggleProductCategory = this.toggleProductCategory.bind(this)
    this.toggleAllFalse = this.toggleAllFalse.bind(this)
  }

  componentDidMount() {
    this.props.fetchUsers()
  }

  toggleNewProduct = () => {
    this.setState({
      newProductShow: true,
      editProduct: false,
      deleteProductShow: false,
      productCategory: false,
      newCategoryShow: false,
      addAdminShow: false,
      deleteUserShow: false
    })
  }

  toggleEditProduct = () => {
    this.setState({
      newProductShow: false,
      editProduct: true,
      deleteProductShow: false,
      productCategory: false,
      newCategoryShow: false,
      addAdminShow: false,
      deleteUserShow: false
    })
  }

  toggleDeleteProduct = () => {
    this.setState({
      newProductShow: false,
      editProduct: false,
      deleteProductShow: true,
      productCategory: false,
      newCategoryShow: false,
      addAdminShow: false,
      deleteUserShow: false
    })
  }

  toggleProductCategory = () => {
    this.setState({
      newProductShow: false,
      editProduct: false,
      deleteProductShow: false,
      productCategory: true,
      newCategoryShow: false,
      addAdminShow: false,
      deleteUserShow: false
    })
  }

  toggleNewCategory = () => {
    this.setState({
      newProductShow: false,
      editProduct: false,
      deleteProductShow: false,
      productCategory: false,
      newCategoryShow: true,
      addAdminShow: false,
      deleteUserShow: false
    })
  }

  toggleAddAdmin = () => {
    this.setState({
      newProductShow: false,
      editProduct: false,
      deleteProductShow: false,
      productCategory: false,
      newCategoryShow: false,
      addAdminShow: true,
      deleteUserShow: false
    })
  }

  toggleDeleteUser = () => {
    this.setState({
      newProductShow: false,
      editProduct: false,
      deleteProductShow: false,
      productCategory: false,
      newCategoryShow: false,
      addAdminShow: false,
      deleteUserShow: true
    })
  }

  toggleAllFalse = () => {
    this.setState({
      newProductShow: false,
      editProduct: false,
      deleteProductShow: false,
      productCategory: false,
      newCategoryShow: false,
      addAdminShow: false,
      deleteUserShow: false
    })
  }

  render() {
    return (
      <div>
        <div>
          <Button onClick={this.toggleNewProduct}>Add New Product</Button>
          <Button onClick={this.toggleProductCategory}>
            Add Category to Product
          </Button>
          <Button onClick={this.toggleDeleteProduct}>Delete Product</Button>
          <Button onClick={this.toggleEditProduct}>Edit Product</Button>
          <Button onClick={this.toggleNewCategory}>
            Add New Product Category
          </Button>
          <Button onClick={this.toggleAddAdmin}>Grant Admin Status</Button>
          <Button onClick={this.toggleDeleteUser}>Delete a User</Button>
        </div>
        <div>
          {this.state.newProductShow ? (
            <AddProduct hideForm={this.toggleAllFalse.bind(this)} />
          ) : (
            ''
          )}
        </div>
        <div>
          {this.state.editProduct ? (
            <EditProduct hideForm={this.toggleAllFalse.bind(this)} />
          ) : (
            ''
          )}
        </div>
        <div>
          {this.state.productCategory ? (
            <ProductCategory hideForm={this.toggleAllFalse.bind(this)} />
          ) : (
            ''
          )}
        </div>
        <div>
          {this.state.deleteProductShow ? (
            <DeleteProduct hideForm={this.toggleAllFalse.bind(this)} />
          ) : (
            ''
          )}
        </div>
        <div>
          {this.state.newCategoryShow ? (
            <AddCategory hideForm={this.toggleAllFalse.bind(this)} />
          ) : (
            ''
          )}
        </div>
        <div>
          {this.state.addAdminShow ? (
            <AddAdmin hideForm={this.toggleAllFalse.bind(this)} />
          ) : (
            ''
          )}
        </div>
        <div>
          {this.state.deleteUserShow ? (
            <DeleteUser hideForm={this.toggleAllFalse.bind(this)} />
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
