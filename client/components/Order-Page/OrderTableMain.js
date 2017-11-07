import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Table } from 'semantic-ui-react'
import { fetchOrders } from '../../store'
import OrderTable from './OrderTable'
import TableHeader from './TableHeader'

class OrderTableMain extends Component {
  constructor(props) {
    super(props)
    this.notice = null
  }

  componentWillMount() {
    this.notice = 'Loading...'
  }

  componentDidMount() {
    !this.props.orders.length && this.props.fetchOrders()
    this.notice = 'No Oders to Display'
  }

  render() {
    const grabUserOrders = this.props.orders.filter(
      order => order.userId === this.props.user.id
    )
    const filteredList = grabUserOrders.filter(
      order => order.status !== 'created'
    )

    return (
      <div>
        {filteredList.length < 1 ? (
          <h2>{this.notice}</h2>
        ) : (
          <div>
            {filteredList.map(order => {
              let orderTotal = 0
              return (
                <div key={order.id}>
                  <Table celled padded>
                    <TableHeader order={order} />
                    {order.order_products.map(orderProd => {
                      return this.props.products.map(product => {
                        if (product.id === orderProd.productId) {
                          orderTotal +=
                            orderProd.quantity * orderProd.purchasePrice
                          return (
                            <OrderTable
                              key={order.id}
                              product={product}
                              orderProd={orderProd}
                            />
                          )
                        }
                      })
                    })}
                  </Table>
                  <h3>Order Total: ${orderTotal / 100}</h3>
                  <h4>Order Status : {order.status}</h4>
                  <h5>Order Placed : {order.createdAt.slice(0, 10)}</h5>
                </div>
              )
            })}
          </div>
        )}
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

export default connect(mapState, mapDispatch)(OrderTableMain)
