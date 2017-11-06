import React, { Component } from 'react'
import { CardElement, injectStripe } from 'react-stripe-elements'
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

const checkoutSuccess = () => {
  //order status => completed
  //order_product purchasePrices get set
  //product inventory get updated
}

class _CardForm extends Component {
  handleSubmit = ev => {
    ev.preventDefault()
    this.props.stripe.createToken().then(payload => {
      if (payload.token) {
        checkoutSuccess()
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
export default injectStripe(_CardForm)
