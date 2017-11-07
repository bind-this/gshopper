import React, { Component } from 'react'
import { Grid } from 'semantic-ui-react'
import UserCard from './UserCard'
import UserOrder from './UserOrder'
import AdminControls from './AdminControls'
import { fetchUsers } from '../../store'
import { connect } from 'react-redux'

class UserPage extends Component {
  componentDidMount() {
    this.props.fetchUsers()
  }

  render() {
    return (
      <Grid padded>
        <Grid.Row>
          <Grid.Column width={9}>
            <UserCard />
          </Grid.Column>
          <Grid.Column width={6}>
            <UserOrder />
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column width={16}>
            <AdminControls />
          </Grid.Column>
        </Grid.Row>
      </Grid>
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

export default connect(mapState, mapDispatch)(UserPage)
