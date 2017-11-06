import React, { Component } from 'react'
import { Card, Button, Grid } from 'semantic-ui-react'
import { deleteUser } from '../../store'
import { connect } from 'react-redux'

class DeleteUser extends Component {
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
    this.props.deleteUser(this.userId)
    this.props.hideForm()
  }

  render() {
    return (
      <h3>
        <form onSubmit={this.handleSubmit}>
          <select name="user" required="required" onChange={this.handleChange}>
            <option>Select User</option>
            {this.props.users.map(user => {
              return (
                <option value={user.id} key={user.id}>
                  {user.email}
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
    users: state.users
  }
}

const mapDispatch = dispatch => {
  return {
    deleteUser: id => dispatch(deleteUser(id))
  }
}

export default connect(mapState, mapDispatch)(DeleteUser)
