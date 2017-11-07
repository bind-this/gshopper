import React, { Component } from 'react'
import { CardElement, injectStripe } from 'react-stripe-elements'
import { connect } from 'react-redux'

import { me, changeProduct, updateCartItem, changingStatus } from '../store'
import history from '../history'

const createOptions = () => ({
  style: {
    base: {
      fontSize: '14px',
      color: '#424770',
      letterSpacing: '0.025em',
      fontFamily: 'Source Code Pro, Menlo, monospace',
      '::placeholder': {
        color: '#aab7c4'
      }
    },
    invalid: {
      color: '#9e2146'
    }
  }
})

const checkoutSuccess = (
  user,
  getUser,
  updateProduct,
  changeCartItem,
  updateStatus
) => {
  console.log('in billing', user)
  const currentOrder = user.orders.find(order => order.status === 'created')
  console.log('currentOrder; ', currentOrder)
  currentOrder.order_products.map(lineItem => {
    // set order_product lines purchasePrice to current price
    console.log(changeCartItem)
    changeCartItem({
      ...lineItem,
      purchasePrice: lineItem.product.price
    })

    // remove quanity of items from their inventory
    updateProduct({
      ...lineItem.product,
      quantity: lineItem.product.quantity - lineItem.quantity
    })
  })
  //set current order status to completed
  updateStatus(currentOrder.id, { status: 'completed' }).then(() => getUser())
}

class _CardForm extends Component {
  handleSubmit = ev => {
    ev.preventDefault()
    this.props.stripe.createToken().then(payload => {
      if (payload.token) {
        checkoutSuccess(
          this.props.user,
          this.props.getUser,
          this.props.updateProduct,
          this.props.changeCartItem,
          this.props.updateStatus
        )
        history.push('/confirmation')
      }
    })
  }
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Card details
          <CardElement {...createOptions()} />
        </label>
        <button>Pay</button>
      </form>
    )
  }
}

const mapState = state => ({
  user: state.user
})

const mapDispatch = dispatch => ({
  updateProduct: product => dispatch(changeProduct(product)),
  changeCartItem: cartItem => dispatch(updateCartItem(cartItem)),
  updateStatus: (orderId, status) => dispatch(changingStatus(orderId, status)),
  getUser: () => dispatch(me())
})
export default injectStripe(connect(mapState, mapDispatch)(_CardForm))
