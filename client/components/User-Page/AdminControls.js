import React, { Component } from 'react'
import { Grid, Button, Card } from 'semantic-ui-react'
import AddProduct from './AddProduct'
import AddCategory from './AddCategory'

class AdminControls extends Component {
  constructor() {
    super()
    this.state = {
      bool1: false,
      bool2: false
    }
    this.onToggle1 = this.onToggle1.bind(this)
    this.onToggle2 = this.onToggle2.bind(this)
  }

  onToggle1 = () => {
    this.setState({ bool1: !this.state.bool1 })
  }

  onToggle2 = () => {
    this.setState({ bool2: !this.state.bool2 })
  }

  render() {
    return (
      <div>
        <div>
          <Button onClick={this.onToggle1}>Add New Product</Button>
          <Button onClick={this.onToggle2}>Add New Product Category</Button>
        </div>
        <div>{this.state.bool1 ? <AddProduct /> : ''}</div>
        <div>{this.state.bool2 ? <AddCategory /> : ''}</div>
      </div>
    )
  }
}

export default AdminControls
