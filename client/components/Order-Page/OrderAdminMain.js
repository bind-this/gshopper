import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Table } from 'semantic-ui-react'
import { fetchOrders, changingStatus } from '../../store'
import OrderTable from './OrderAdminTable'
import TableHeader from './TableHeader'

let total = 0
let orderStatus
let filteredList
let statusSubmit
let notice

class OrderAdmin extends Component {
  constructor(props) {
    super(props)
    this.state = {
      orders: this.props.orders
    }
    this.filterSelect = this.filterSelect.bind(this)
    this.updateStatus = this.updateStatus.bind(this)
    this.submitUpdate = this.submitUpdate.bind(this)
  }

  componentWillMount() {
    notice = 'Loading...'
  }

  componentDidMount() {
    !this.props.orders.length && this.props.fetchOrders()
    notice = 'No Orders to Display'
  }

  filterSelect(evt) {
    orderStatus = evt.target.value
    this.setState({ orders: filteredList })
  }

  updateStatus(evt) {
    statusSubmit = evt.target.value
  }

  submitUpdate(evt, orderId) {
    this.props.changingStatus(orderId, { status: statusSubmit })
  }

  render() {
    filteredList = this.props.orders.filter(order => {
      if (orderStatus) return order.status === orderStatus
      else return true
    })
    return (
      <div>
        {filteredList.length < 1 ? (
          <div>
            <form>
              <label>Filter by Order Status:</label>
              <select onChange={this.filterSelect} name="order">
                <option />
                <option value="created">Created</option>
                <option value="completed">Completed</option>
                <option value="processing">Processing</option>
                <option value="cancelled">Cancelled</option>
              </select>
            </form>
            <h2> {notice} </h2>
          </div>
        ) : (
          <div>
            <div>
              <form>
                <label>Filter by Order Status:</label>
                <select onChange={this.filterSelect} name="order">
                  <option />
                  <option value="created">Created</option>
                  <option value="completed">Completed</option>
                  <option value="processing">Processing</option>
                  <option value="cancelled">cancelled</option>
                </select>
              </form>
            </div>
            <div>
              {filteredList.map(order => {
                return (
                  <div key={order.id}>
                    <Table celled padded>
                      <TableHeader order={order} />
                      {order.order_products.map(orderProd => {
                        return this.props.products.map(product => {
                          if (product.id === orderProd.productId) {
                            total +=
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
                    <h3>Order Total: ${total / 100}</h3>
                    <h4>Order Status : {order.status}</h4>
                    <form onSubmit={evt => this.submitUpdate(evt, order.id)}>
                      <label>Update Order Status</label>
                      <select onChange={this.updateStatus} name="order">
                        <option />
                        <option value="created">Created</option>
                        <option value="completed">Completed</option>
                        <option value="processing">Processing</option>
                        <option value="cancelled">cancelled</option>
                      </select>
                      <button type="submit">Submit Change</button>
                    </form>
                    <h5>Order Placed : {order.createdAt.slice(0, 10)}</h5>
                    <br />
                    <br />
                    <br />
                  </div>
                )
              })}
            </div>
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
    fetchOrders: () => dispatch(fetchOrders()),
    changingStatus: (id, status) => dispatch(changingStatus(id, status))
  }
}

export default connect(mapState, mapDispatch)(OrderAdmin)
