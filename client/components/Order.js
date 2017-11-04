'use strict'

import React from 'react'
import { Label, Item, Button, Icon, Segment, Grid } from 'semantic-ui-react'

const Order = props => (
  <div>

          <h1><Icon name="shop" />Your Order <Label circular color="red">2</Label></h1>
          <Segment>
            <Item.Group divided>
              <Item>
                <Item.Image src="product-placeholder-image.jpg" shape='rounded' />

                <Item.Content>
                  <Item.Header as="a">My Neighbor Totoro</Item.Header>
                  <Item.Meta>
                    <span className="cinema">IFC Cinema</span>
                  </Item.Meta>
                  <Item.Description>{'paragraph'}</Item.Description>
                  <Item.Extra>
                    <Button.Group floated="right">
                      <Button icon="minus" />
                      <Button>3</Button>
                      <Button icon="plus" />
                    </Button.Group>
                    <Label>Limited</Label>
                  </Item.Extra>
                </Item.Content>
              </Item>
              <Item>
                <Item.Image src="product-placeholder-image.jpg" />

                <Item.Content>
                  <Item.Header as="a">My Neighbor Totoro</Item.Header>
                  <Item.Meta>
                    <span className="cinema">IFC Cinema</span>
                  </Item.Meta>
                  <Item.Description>{'paragraph'}</Item.Description>
                  <Item.Extra>
                    <Button primary floated="right">
                      Buy tickets
                      <Icon name="right chevron" />
                    </Button>
                    <Label>Limited</Label>
                  </Item.Extra>
                </Item.Content>
              </Item>
            </Item.Group>
          </Segment>

  </div>
)

export default Order
