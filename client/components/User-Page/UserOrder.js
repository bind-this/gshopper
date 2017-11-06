import React, { Component } from 'react'
import { Card, Button, Grid } from 'semantic-ui-react'
import { updatingUser } from '../../store'
import { connect } from 'react-redux'

class UserOrder extends Component {
  constructor(props) {
    super(props)
    this.state = {
      bool: false
    }
  }

  render() {
    const user = this.props.user
    return (
      <Card>
        <Card.Content>
          <Grid padded>
            <Grid.Row>
              <Grid.Column width={9}>
                <p>User Since :</p>
                <p> {user.createdAt && user.createdAt.slice(0, 10)} </p>
                <p>Reviews Submited: </p>
                <p>{user.reviews && user.reviews.length}</p>
                <p> Total Orders: </p>
                <p>{user.orders && user.orders.length}</p>
              </Grid.Column>
            </Grid.Row>
          </Grid>
          <Button href="/orders">View Order History</Button>
        </Card.Content>
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

export default connect(mapState, mapDispatch)(UserOrder)
