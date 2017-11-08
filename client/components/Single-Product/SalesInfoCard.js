import React from 'react'
import { connect } from 'react-redux'
import { sendCartItem, me } from '../../store'

class SalesInfoCard extends React.Component {
  increase(item) {
    let quantity = 1
    let currentCart =
      this.props.user.orders &&
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
      userId: this.props.user.id
    }
    this.props.updateCartItem(cartItem)
  }

  render() {
    const product = this.props.product
    return (
      <div
        className="ui cards"
        style={{ margin: '1em', display: 'flex', flexGrow: '1' }}
      >
        <div className="card">
          <div className="content">
            <div className="header">Sales Info</div>
            <div className="description" />
            <div>
              {product.availability && product.availability ? (
                ''
              ) : (
                <b style={{ fontSize: '1.5em' }}>Currently Unavailable</b>
              )}
            </div>
            <div>
              Price: {product.price ? `$${product.price / 100}` : 'free'}
            </div>
            <div>Quantity: {product.quantity}</div>
          </div>
          <div
            className="ui bottom attached button"
            onClick={() => this.increase(this.props)}
          >
            <i className="add icon" />
            Add To Cart
          </div>
        </div>
      </div>
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

export default connect(mapState, mapDispatch)(SalesInfoCard)
