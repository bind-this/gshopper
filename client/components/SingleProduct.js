import React, { Component } from 'react'
import {connect} from 'react-redux'
import { Advertisement } from 'semantic-ui-react'
import { fetchProduct, changeProduct, removeProduct } from '../store'

class SingleProduct extends Component {

  componentDidMount() {
    this.props.fetchProduct(+this.props.match.params.productId)
  }

  render() {
    const product = this.props.product
console.log('HAHAAHAHHAAAHAHAHAHA', this.props.product)
    return (
      <div>
        <div>
          <div>
          <Advertisement unit='half page' test='HELLO' />
          </div>
          <div>name etc.</div>
        </div>
        <div>reviews
          <ul>
          {
            product.reviews &&
            product.reviews.map(review => <li key={review.id} >{ review.rating }</li>)
          }
          </ul>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({ product: state.product })

const mapDispatchToProps = (dispatch) => ({
  fetchProduct: productId => dispatch(fetchProduct(productId)),
  changeProduct: product => dispatch(changeProduct(product)),
  removeProduct: productId => dispatch(removeProduct(productId))
})

export default connect(mapStateToProps, mapDispatchToProps)(SingleProduct)


/*
<div>
        <h1>{product.name}</h1>
        <img href={product.img} text="img" />
        <ul>
          <li>author: { product.author }</li>
          <li>availability: { product.availability && product.availability ? 'yes' : 'no' }</li>
          <li>categorie(s): { product.category && product.category.join(', ') }</li>
          <li>description: { product.description }</li>
          <li>price: ${ product.price }</li>
          <li>quantity availabile: { product.quantity }</li>
          <li>reviews: { product.review && product.review.map(review => <div key={review.id}>{ review.comment }</div>) }</li>
        </ul>
      </div>
*/
