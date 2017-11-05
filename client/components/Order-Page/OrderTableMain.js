import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Table } from 'semantic-ui-react'
import { fetchOrders } from '../../store'
import OrderTable from './OrderTable'
import TableHeader from './TableHeader'

let total = 0
let notice

class OrderEdit extends Component {
  componentWillMount() {
    notice = 'Loading...'
  }

  componentDidMount() {
    !this.props.orders.length && this.props.fetchOrders()
    notice = 'No Oders to Display'
  }

  render() {
    const filteredList = this.props.orders.filter(
      order => order.userId === this.props.user.id
    )
    return (
      <div>
        {filteredList.length < 1 ? (
          <h2>{notice}</h2>
        ) : (
          <div>
            {filteredList.map(order => {
              return (
                <div key={order.id}>
                  <Table celled padded>
                    <TableHeader order={order} />
                    {order.order_products.map(orderProd => {
                      return this.props.products.map(product => {
                        if (product.id === orderProd.productId) {
                          total += orderProd.quantity * orderProd.purchasePrice
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
                  <h3>Order Total: ${total / 100}</h3>
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

export default connect(mapState, mapDispatch)(OrderEdit)
