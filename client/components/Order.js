'use strict'

import React, { Component } from 'react'
import { Label, Item, Button, Icon, Segment, Grid } from 'semantic-ui-react'
import { connect } from 'react-redux'
import { sendCartItem, removeCartItem, me } from '../store'
import _ from 'lodash'

class Order extends Component {
  constructor (props) {
    super(props)
  }

  increase (item) {
    console.log('helo2')
    const cartItem = {
      productId: item.product.id,
      quantity: item.quantity + 1,
      userId: this.props.user.id
    }
    this.props.updateCartItem(cartItem)
    this.props.fetchUserData()
  }
  
  decrease (item) {
    const cartItem = {
      productId: item.product.id,
      quantity: item.quantity - 1,
      userId: this.props.user.id
    }
    this.props.updateCartItem(cartItem)
  }

  remove (item) {
    const cartItem = {
      order_product_id: item.id,
      userId: this.props.user.id
    }
    this.props.removeCartItem(item)
  }
  
  render () {
    const order = this.props.order
    return (
      <div>
        <Segment>
          <Item.Group divided>
            {order.map(item => (
              <Item
                key={item.id}
              >
                <Item.Image src={item.product.img} shape='rounded' label={{ as: 'a', color: 'red', corner: 'left', icon: 'trash outline', onClick: () => this.remove(item) }}/>
                <Item.Content>
                  <Item.Header as="a">{item.product.name}</Item.Header>
                  <Item.Meta>
                    <span>{item.product.categories.map(cat => cat.name).join(', ')}</span>
                  </Item.Meta>
                  <Item.Description>{item.product.description.slice(0, 140).trim() + '...'}</Item.Description>
                  <Item.Extra>
                    <Label>{item.product.price ? '$' + item.product.price / 100 : 'Free'}</Label>
                    <Button.Group floated="right">
                      <Button icon="minus" onClick={() => this.decrease(item)} />
                      <Button>{item.quantity}</Button>
                      <Button icon="plus" onClick={() => this.increase(item)} />
                    </Button.Group>
                    <Label color="red"><Icon name='dollar' /> Sells your data</Label>
                    <Label color="red"><Icon name='pin' /> Records your location</Label>
                  </Item.Extra>
                </Item.Content>
              </Item>
            ))}
          </Item.Group>
        </Segment>
  
      </div>
    )
  }

}

const mapState = (state, ownProps) => {
  return state;
};

const mapDispatch = (dispatch, ownProps) => {
  return {
    updateCartItem: (cartItem) => {
      dispatch(sendCartItem(cartItem))
        .then(() => {
          dispatch(me())
        })
    },
    removeCartItem: (cartItemId) => {
      dispatch(removeCartItem(cartItemId))
        .then(() => {
          dispatch(me())
        })
    }
  };
};

export default connect(mapState, mapDispatch)(Order)
