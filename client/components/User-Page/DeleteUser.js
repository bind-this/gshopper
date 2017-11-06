import React, { Component } from 'react'
import { Button } from 'semantic-ui-react'
import { deleteUser } from '../../store'
import { connect } from 'react-redux'

let userId

class DeleteUser extends Component {
  constructor(props) {
    super(props)
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(evt) {
    userId = evt.target.value
  }

  handleSubmit() {
    this.props.deleteUser(userId)
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
