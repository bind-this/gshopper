import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import { Card, Icon, Image, Rating } from 'semantic-ui-react'
import history from '../history'
import { sendCartItem, me } from '../store'
import { connect } from 'react-redux'


class AppCard extends Component {
  constructor (props) {
    super(props)
  }

  increase (item) {
    const cartItem = {
      productId: item.product.id,
      quantity: 1,
      userId: this.props.user.id
    }
    this.props.updateCartItem(cartItem)
  }

  render () {
    return (
      <Card raised>
        <Image
          height="290px"
          src={this.props.product.img}
          onClick={() => history.push(`/product/${this.props.product.id}`)}
          style={{ cursor: 'pointer' }}
        />
        <Card.Content>
          <Card.Header
            onClick={() => history.push(`/product/${this.props.product.id}`)}
            style={{ cursor: 'pointer' }}
          >
            {this.props.product.name}
          </Card.Header>
          <Card.Meta>
            <span className="card-category">
              {this.props.product.categories[0].name}{' '}
              <Rating icon="star" defaultRating={3} maxRating={5} disabled />
            </span>
          </Card.Meta>
          <Card.Description>
            {this.props.product.description.slice(0, 70)}...
          </Card.Description>
        </Card.Content>
        <Card.Content extra>
          <Icon name="tag" />
          {this.props.product.price ? '$' + this.props.product.price / 100 : 'Free'}
          <Icon circular inverted color='grey' name='shop' floated='right' onClick={() => this.increase(this.props)} />
        </Card.Content>
      </Card>

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
    }
  };
};

export default connect(mapState, mapDispatch)(AppCard)
