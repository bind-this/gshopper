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
      bool1: false,
      bool2: false,
      bool3: false,
      bool4: false
    }
    this.onToggle1 = this.onToggle1.bind(this)
    this.onToggle2 = this.onToggle2.bind(this)
    this.onToggle3 = this.onToggle3.bind(this)
    this.onToggle4 = this.onToggle4.bind(this)
  }

  componentDidMount() {
    this.props.fetchUsers()
  }

  onToggle1 = () => {
    this.setState({ bool1: true, bool2: false, bool3: false, bool4: false })
  }

  onToggle2 = () => {
    this.setState({ bool1: false, bool2: true, bool3: false, bool4: false })
  }

  onToggle3 = () => {
    this.setState({ bool1: false, bool2: false, bool3: true, bool4: false })
  }

  onToggle4 = () => {
    this.setState({ bool1: false, bool2: false, bool3: false, bool4: true })
  }

  render() {
    return (
      <div>
        <div>
          <Button onClick={this.onToggle1}>Add New Product</Button>
          <Button onClick={this.onToggle2}>Add New Product Category</Button>
          <Button onClick={this.onToggle3}>Grant Admin Status</Button>
          <Button onClick={this.onToggle4}>Delete a User</Button>
        </div>
        <div>{this.state.bool1 ? <AddProduct /> : ''}</div>
        <div>{this.state.bool2 ? <AddCategory /> : ''}</div>
        <div>{this.state.bool3 ? <AddAdmin /> : ''}</div>
        <div>{this.state.bool4 ? <DeleteUser /> : ''}</div>
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
