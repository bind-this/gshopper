import React from 'react'
import { Grid, Button } from 'semantic-ui-react'
import UserCard from './UserCard'
import UserOrder from './UserOrder'

const UserPage = () => {
  return (
    <Grid padded>
      <Grid.Row>
        <Grid.Column width={9}>
          <UserCard />
        </Grid.Column>
        <Grid.Column width={4}>
          <UserOrder />
        </Grid.Column>
      </Grid.Row>
      <Grid.Row>
        <Grid.Column width={15}>
          <Button href="/orders">View Order History</Button>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  )
}

export default UserPage
