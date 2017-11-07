import React, { Component } from 'react'
import { Button } from 'semantic-ui-react'
import AddProduct from './AddProduct'
import AddCategory from './AddCategory'
import AddAdmin from './AddAdmin'
import DeleteUser from './DeleteUser'
import { fetchUsers } from '../../store'
import { connect } from 'react-redux'

class AdminControls extends Component {
  constructor() {
    super()
    this.state = {
      newProductShow: false,
      newCategoryShow: false,
      addAdminShow: false,
      deleteUserShow: false
    }
    this.toggleNewProduct = this.toggleNewProduct.bind(this)
    this.toggleNewCategory = this.toggleNewCategory.bind(this)
    this.toggleAddAdmin = this.toggleAddAdmin.bind(this)
    this.toggleDeleteUser = this.toggleDeleteUser.bind(this)
    this.toggleAllFalse = this.toggleAllFalse.bind(this)
  }

  componentDidMount() {
    this.props.fetchUsers()
  }

  toggleNewProduct = () => {
    this.setState({
      newProductShow: true,
      newCategoryShow: false,
      addAdminShow: false,
      deleteUserShow: false
    })
  }

  toggleNewCategory = () => {
    this.setState({
      newProductShow: false,
      newCategoryShow: true,
      addAdminShow: false,
      deleteUserShow: false
    })
  }

  toggleAddAdmin = () => {
    this.setState({
      newProductShow: false,
      newCategoryShow: false,
      addAdminShow: true,
      deleteUserShow: false
    })
  }

  toggleDeleteUser = () => {
    this.setState({
      newProductShow: false,
      newCategoryShow: false,
      addAdminShow: false,
      deleteUserShow: true
    })
  }

  toggleAllFalse = () => {
    this.setState({
      newProductShow: false,
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
