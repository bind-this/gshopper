import React, { Component } from 'react'
import { Card, Button, Grid } from 'semantic-ui-react'
import { UserEdit } from './UserEdit'
import { updatingUser } from '../../store'
import { connect } from 'react-redux'

class UserCard extends Component {
  constructor(props) {
    super(props)
    this.state = {
      showHideUserEdit: false
    }
    this.toggleUserEdit = this.toggleUserEdit.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.tempUser = {}
  }

  toggleUserEdit = () => {
    this.setState({ showHideUserEdit: !this.state.showHideUserEdit })
  }

  handleChange(evt) {
    this.tempUser[evt.target.name] = evt.target.value
  }

  handleSubmit(evt) {
    evt.preventDefault()
    this.props.updatingUser(this.props.user.id, this.tempUser)
    this.toggleUserEdit()
  }

  render() {
    const user = this.props.user
    return (
      <Card fluid raised>
        {this.state.showHideUserEdit ? (
          <UserEdit
            handleSubmit={this.handleSubmit.bind(this)}
            handleChange={this.handleChange.bind(this)}
            user={this.props.user}
          />
        ) : (
          <Card.Content>
            <Grid padded>
              <Grid.Row>
                <Grid.Column width={9}>
                  <h2>User Profile</h2>
                  <h4>
                    User Name : {user.firstName} {user.lastName}
                  </h4>
                  <h2>Mailing Address</h2>
                  <h4> Address : {user.address} </h4>
                  <h4> City : {user.city} </h4>
                  <h4> Zip : {user.zip} </h4>
                  <br />
                  <br />
                </Grid.Column>
                <Grid.Column width={4}>
                  <h2>Contact Information</h2>
                  <h4> Email Address : {user.email} </h4>
                  <h4> Phone Number : {user.phone} </h4>
                  <br />
                  <br />
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </Card.Content>
        )}
        <Button onClick={this.toggleUserEdit}>
          {this.state.showHideUserEdit
            ? 'Return to User Profile'
            : 'Edit Profile'}
        </Button>
      </Card>
    )
  }
}

const mapState = state => {
  return {
    user: state.user
  }
}

const mapDispatch = dispatch => {
  return {
    updatingUser: (id, updates) => dispatch(updatingUser(id, updates))
  }
}

export default connect(mapState, mapDispatch)(UserCard)
