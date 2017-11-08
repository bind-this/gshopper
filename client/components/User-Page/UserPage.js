import React from 'react'
import { Grid } from 'semantic-ui-react'
import UserCard from './UserCard'
import UserOrder from './UserOrder'
import AdminControls from './AdminControls'
import { connect } from 'react-redux'

const UserPage = props => {
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
          {props.user.admin ? <AdminControls /> : ' '}
        </Grid.Column>
      </Grid.Row>
    </Grid>
  )
}

const mapState = state => {
  return {
    user: state.user
  }
}

export default connect(mapState)(UserPage)
