import React from 'react'
import { Grid } from 'semantic-ui-react'
import UserCard from './UserCard'
import UserOrder from './UserOrder'
import AdminControls from './AdminControls'

const UserPage = () => {
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

export default UserPage
