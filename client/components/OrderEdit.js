// // import React, { Component } from 'react'
// // import { connect } from 'react-redux'
// // import { Grid, Card, Image, Icon } from 'semantic-ui-react'
// // import { fetchOrders } from '../store'

// // class OrderEdit extends Component {
// //   constructor(props) {
// //     super(props)
// //     this.state = {
// //       something: []
// //     }
// //   }

// //   componentDidMount() {
// //     !this.props.orders.length && this.props.fetchOrders()
// //   }

// //   render() {
// //     const filteredList = this.props.orders.filter(
// //       order => order.userId === this.props.user.id
// //     )
// //     const products =
// //       this.props.products &&
// //       this.props.products.filter(product => {
// //         for (var i = 0; i < filteredList.length; i++) {
// //           if (product.id === filteredList[i].productId) return product
// //         }
// //       })
// //     return (
// //       <div>
// //         {console.log(products)}
// //         {console.log(filteredList)}
// //         {filteredList.map(order => {
// //           return (
// //             <div key={order.id}>
// //               <h1>Order ID: {order.id}</h1>
// //               <h3>Products Purchased</h3>
// //               {this.props.products.filter(products => {})}
// //               {order.order_products.map(orderProd => {
// //                 return this.props.products.map(product => {
// //                   if (product.id === orderProd.productId) {
// //                     return (
// //                       <Card raised key={product.id}>
// //                         <Image
// //                           height="75px"
// //                           width="75px"
// //                           src={product.img}
// //                           onClick={() =>
// //                             history.push(`/product/${props.product.id}`)}
// //                           style={{ cursor: 'pointer' }}
// //                         />
// //                         <Card.Content>
// //                           <Card.Header
// //                             onClick={() =>
// //                               history.push(`/product/${props.product.id}`)}
// //                             style={{ cursor: 'pointer' }}
// //                           >
// //                             Product: {product.name}
// //                           </Card.Header>
// //                           <Card.Meta>
// //                             <span className="price">
// //                               Quantity Purchased: {orderProd.quantity}
// //                             </span>
// //                           </Card.Meta>
// //                         </Card.Content>
// //                         <Card.Content extra>
// //                           <Icon name="tag" />
// //                           Price:{' '}
// //                           {product.price ? '$' + product.price / 100 : 'Free'}
// //                         </Card.Content>
// //                       </Card>
// //                     )
// //                   }
// //                 })
// //               })}
// //             </div>
// //           )
// //         })}
// //       </div>
// //     )
// //   }
// // }

// // const mapState = state => {
// //   return {
// //     user: state.user,
// //     orders: state.orders,
// //     products: state.products
// //   }
// // }

// // const mapDispatch = dispatch => {
// //   return {
// //     fetchOrders: () => dispatch(fetchOrders())
// //   }
// // }

// // export default connect(mapState, mapDispatch)(OrderEdit)

// import React, { Component } from 'react'
// import { connect } from 'react-redux'
// import { Grid, Card, Image, Icon } from 'semantic-ui-react'
// import { fetchOrders } from '../store'
// import OrderProd from './OrderProd'

// let total = 0

// class OrderEdit extends Component {
//   constructor(props) {
//     super(props)
//     this.state = {
//       something: []
//     }
//   }

//   componentDidMount() {
//     !this.props.orders.length && this.props.fetchOrders()
//   }

//   render() {
//     const filteredList = this.props.orders.filter(
//       order => order.userId === this.props.user.id
//     )
//     const products =
//       this.props.products &&
//       this.props.products.filter(product => {
//         for (var i = 0; i < filteredList.length; i++) {
//           if (product.id === filteredList[i].productId) return product
//         }
//       })
//     return (
//       <div>
//         {filteredList.map(order => {
//           return (
//             <div key={order.id}>
//               <h2>Order ID: {order.id}</h2>
//               <h3>Products Purchased</h3>
//               {order.order_products.map(orderProd => {
//                 return this.props.products.map(product => {
//                   if (product.id === orderProd.productId) {
//                     total += orderProd.quantity * orderProd.purchasePrice
//                     return (
//                       <Grid padded key={product.id}>
//                         <Grid.Row>
//                           <Grid.Column width={16}>
//                             <OrderProd
//                               product={product}
//                               orderProd={orderProd}
//                             />
//                           </Grid.Column>
//                         </Grid.Row>
//                       </Grid>
//                     )
//                   }
//                 })
//               })}
//               <h3>Order Total: ${total / 100}</h3>
//             </div>
//           )
//         })}
//       </div>
//     )
//   }
// }

// const mapState = state => {
//   return {
//     user: state.user,
//     orders: state.orders,
//     products: state.products
//   }
// }

// const mapDispatch = dispatch => {
//   return {
//     fetchOrders: () => dispatch(fetchOrders())
//   }
// }

// export default connect(mapState, mapDispatch)(OrderEdit)
