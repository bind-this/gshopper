import React, { Component } from 'react'
import { Label, Grid, Icon, Button } from 'semantic-ui-react'
import { connect } from 'react-redux'
import Order from '../Order'
// import Steps from '../Steps'

class Cart extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    let order = ''
    console.log(this.props.user.orders)
    if (this.props.user.orders && this.props.user.orders.length) {
      order =
        this.props.user &&
        this.props.user.orders.filter(order => order.status === 'created')[0]
          .order_products
    }
    console.log(order)
    return (
      <Grid centered columns={3}>
        <Grid.Column width={10}>
          {order ? (
            <div>
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
              />
            </div>
          ) : (
            'Your cart is empty.'
          )}
        </Grid.Column>
      </Grid>
    )
  }
}

const mapState = state => {
  return {
    user: state.user
  }
}

export default connect(mapState)(Cart)
