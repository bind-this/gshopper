import React from 'react'
import { Label, Grid, Icon, Button, Segment, Header } from 'semantic-ui-react'
import { connect } from 'react-redux'
import history from '../history'
import Order from './Order'
import Steps from './Steps'
import axios from 'axios'

function Cart(props) {
  let order = ''

  if (!props.user.id && localStorage.getItem('cart')) {
    order = JSON.parse(localStorage.getItem('cart')).order_products
  }
  else if (
    props.user.orders &&
    props.user.orders.filter(order => order.status === 'created').length
  ) {
    order = props.user.orders.filter(order => order.status === 'created')[0]
      .order_products
  }

  return (
    <Grid centered columns={3}>
      <Grid.Column width={10}>
        {order ? (
          <div>
            <Steps />
            <h1>
              <Icon name="shop" />Your Order{' '}
              <Label circular color="red">
                {order.length}
              </Label>
            </h1>
            <Order order={order} />
            <Button
              attached="bottom"
              color="green"
              icon="dollar"
              content="Confirm order and pay"
              onClick={() => history.push('/billing')}
            />
          </div>
        ) : (
          <div>
            <br />
            <br />
            <Segment raised>
              <Header as="h2" textAlign="center">
                Your Cart is empty!
              </Header>
              <Button
                color="yellow"
                fluid
                size="large"
                onClick={() => history.push('/products')}
              >
                More Shopping!!
              </Button>
            </Segment>
          </div>
        )}
      </Grid.Column>
    </Grid>
  )
}

const mapState = state => {
  return {
    user: state.user
  }
}

export default connect(mapState)(Cart)
