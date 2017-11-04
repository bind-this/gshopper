'use strict'

import React from 'react'
import { Label, Item, Button, Icon, Segment, Grid } from 'semantic-ui-react'

const Order = props => {
  const order = props.order
  return (
    <div>
      <Segment>
        <Item.Group divided>
          {order.map(item => (
            <Item key={item.id}>
              <Item.Image src={item.product.img} shape='rounded' />
              <Item.Content>
                <Item.Header as="a">{item.product.name}</Item.Header>
                <Item.Meta>
                  <span>{item.product.categories.map(cat => cat.name).join(', ')}</span>
                </Item.Meta>
                <Item.Description>{item.product.description.slice(0, 140).trim() + '...'}</Item.Description>
                <Item.Extra>
                  <Label>{item.product.price ? '$' + item.product.price / 100 : 'Free'}</Label>
                  <Button.Group floated="right">
                    <Button icon="minus" />
                    <Button>{item.quantity}</Button>
                    <Button icon="plus" />
                  </Button.Group>
                  <Label color="red"><Icon name='dollar' /> Sells your data</Label>
                  <Label color="red"><Icon name='pin' />Records your location</Label>
                </Item.Extra>
              </Item.Content>
            </Item>
          ))}
        </Item.Group>
      </Segment>

    </div>
  )
}

export default Order
