import React, { Component } from 'react'
import { Card, Icon, Image, Rating, Button } from 'semantic-ui-react'
import history from '../history'
import { sendCartItem, me, getAnonCart } from '../store'
import { connect } from 'react-redux'
import axios from 'axios'

class AppCard extends Component {
  increase(item) {
    let quantity = 1
    let currentCart =
      this.props.user.orders &&
      this.props.user.orders.status &&
      this.props.user.orders.find(order => order.status === 'created')
    if (
      currentCart &&
      currentCart.order_products.find(
        line => line.productId === item.product.id
      )
    ) {
      quantity =
        this.props.user.orders
          .find(order => order.status === 'created')
          .order_products.find(line => line.productId === item.product.id)
          .quantity + 1
    }
    const cartItem = {
      productId: item.product.id,
      quantity: quantity,
      userId: this.props.user.id || null
    }
    this.props.updateCartItem(cartItem)
    this.getAnonCart()
  }

  getAnonCart () {
    axios
    .get('/api/orders/anon')
    .then(res => {
      localStorage.setItem('cart', JSON.stringify(res.data))
      console.log('local storage is set to: ', localStorage.getItem('cart'))
    })
    .catch(err => console.log(err))
  }

  render() {
    return (
      <Card style={{width: 175}} raised>
        <Image
          height="175px"
          src={this.props.product.img}
          onClick={() => history.push(`/products/${this.props.product.id}`)}
          style={{ cursor: 'pointer' }}
        />
        <Card.Content>
          <Card.Header
            onClick={() => history.push(`/products/${this.props.product.id}`)}
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
          {this.props.product.price
            ? '$' + this.props.product.price / 100
            : 'Free'}
          <Button
            size="mini"
            floated="right"
            onClick={() => this.increase(this.props)}
          >
            Add To Cart
          </Button>
        </Card.Content>
      </Card>
    )
  }
}

const mapState = state => ({
  user: state.user
})

const mapDispatch = dispatch => {
  return {
    updateCartItem: cartItem => {
      dispatch(sendCartItem(cartItem)).then(() => {
        dispatch(me())
      })
    }
  }
}

export default connect(mapState, mapDispatch)(AppCard)
