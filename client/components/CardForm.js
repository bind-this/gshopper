import React, { Component } from 'react'
import { CardElement, injectStripe } from 'react-stripe-elements'
import { connect } from 'react-redux'

import { changeProduct, updateCartItem, changingStatus } from '../store'
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
  changeProduct,
  updateCartItem,
  changingStatus
) => {
  console.log('in billing', user)
  const currentOrder = user.orders.filter(order => order.status === 'created')

  currentOrder.order_products.map(lineItem => {
    // set order_product lines purchasePrice to current price
    updateCartItem(
      Object.assign({}, lineItem, {
        purchasePrice: lineItem.product.price
      })
    )
    // remove quanity of items from their inventory
    changeProduct(
      Object.assign({}, lineItem.product, {
        quantity: lineItem.product.quantity - lineItem.quantity
      })
    )
    //set current order status to completed
    changingStatus(currentOrder.id, 'completed')
  })
}

class _CardForm extends Component {
  handleSubmit = ev => {
    ev.preventDefault()
    this.props.stripe.createToken().then(payload => {
      if (payload.token) {
        checkoutSuccess(
          this.props.user,
          this.props.changeProduct,
          this.props.updateCartItem,
          this.props.changingStatus
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
  changeProduct: product => dispatch(changeProduct(product)),
  changeCartItem: cartItem => dispatch(updateCartItem(cartItem)),
  changingStatus: (orderId, status) => dispatch(changingStatus(orderId, status))
})
export default connect(mapState, mapDispatch)(injectStripe(_CardForm))
