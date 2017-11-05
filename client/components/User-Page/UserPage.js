import React from 'react'
import { Card, Grid, Image, Button } from 'semantic-ui-react'
import { connect } from 'react-redux'
import UserCard from './UserCard'
import UserCart from './UserCart'
import { fetchOrders } from '../../store'

const UserPage = props => {

    return (
      <Grid padded>
        <Grid.Row>
          <Grid.Column width={3}>
            <Card raised>
              <Card.Content>
                <Image centered src={props.user.img} />
              </Card.Content>
            </Card>
          </Grid.Column>
          <Grid.Column width={8}>
            <UserCard user={props.user} />
          </Grid.Column>
          <Grid.Column width={4}>
            <UserCart />
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column width={15}>
            <Button href='/orders'>View Order History</Button>
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

const mapDispatch = dispatch => {
  return {
    fetchOrders: userId => dispatch(fetchOrders(userId))
  }
}

export default connect(mapState, mapDispatch)(UserPage)
