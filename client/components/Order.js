'use strict'

import React, { Component } from 'react'
import { Label, Item, Button, Icon, Segment, Grid } from 'semantic-ui-react'
import { connect } from 'react-redux'
import { sendCartItem } from '../store'
import _ from 'lodash'

class Order extends Component {
  constructor (props) {
    super(props)
  }

  increase () {
    console.log('hello')
  }
  
  render () {
    const order = this.props.order
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
                      <Button icon="plus" onClick={this.increase} />
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

// const mapState = ({ users, stories, currentUser }, ownProps) => {
//   const story = stories.find(aStory => aStory.id === +ownProps.match.params.id);
//   const storyId = ownProps.storyId;
//   return { story, users, storyId, currentUser };
// };

const mapDispatch = (dispatch, ownProps) => {
  console.log(ownProps)
  return {
    debouncedUpdateCartItem: _.debounce((...args) => {
      dispatch(updateStory(...args));
    }, 500),

    updateCartItem: () => {
      const storyId = ownProps;
      dispatch(fetchStory(storyId));
    }
  };
};

export default connect(mapState, mapDispatch)(Order)
