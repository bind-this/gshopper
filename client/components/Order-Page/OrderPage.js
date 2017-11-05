import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchOrders } from '../../store'
import OrderTableMain from './OrderTableMain'
import OrderAdminMain from './OrderAdminMain'
import CartPage from './CartPage'

class OrderPage extends Component {
  componentDidMount() {
    !this.props.orders.length && this.props.fetchOrders()
  }
  render() {
    return (
      <div>
        {this.props.user.admin ? <OrderAdminMain /> : <OrderTableMain />}
      </div>
    )
  }
}

const mapState = state => {
  return {
    user: state.user,
    orders: state.orders,
    products: state.products
  }
}

const mapDispatch = dispatch => {
  return {
    fetchOrders: () => dispatch(fetchOrders())
  }
}

export default connect(mapState, mapDispatch)(OrderPage)
