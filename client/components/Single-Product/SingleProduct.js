import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Image, Rating } from 'semantic-ui-react'
import {
  fetchReview,
  fetchProduct,
  changeProduct,
  removeProduct
} from '../../store'
import Review from './Review'
import Carousel from './Carousel'
import SalesInfoCard from './SalesInfoCard'
import ProductInfo from './ProductInfo'

class SingleProduct extends Component {
  componentDidMount() {
    this.props.fetchProduct(+this.props.match.params.productId)
    this.props.fetchReview(+this.props.match.params.productId)
  }

  render() {
    const product = this.props.product
    let averageRating =
      this.props.review.length &&
      Math.ceil(
        this.props.review.reduce((accum, review) => {
          return accum + review.rating
        }, 0) / this.props.review.length
      )

    return (
      <div style={{ margin: '1.5em' }}>
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-around'
          }}
        >
          <img style={{ borderRadius: '15%' }} src={product.img} />
          <h1 style={{ fontSize: '3em' }}>{product.name}</h1>
          <div>
            {averageRating ? (
              <Rating
                icon="star"
                defaultRating={averageRating}
                maxRating={5}
                disabled
              />
            ) : (
              ''
            )}
          </div>
        </div>
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between'
          }}
        >
          <div
            style={{
              display: 'flex',
              flexGrow: '10',
              width: '100%',
              height: '100%'
            }}
          >
            {/* use below until Carousel is functional */}
            <Image src={product.altImages && product.altImages[0]} />
            {/* <Carousel product={ product } /> */}
          </div>
          <div style={{ display: 'flex', flexDirection: 'row', flexGrow: '3' }}>
            <ProductInfo product={product} />
            <SalesInfoCard product={product} />
          </div>
        </div>
        <Review reviews={this.props.review} />
      </div>
    )
  }
}

const mapStateToProps = state => ({
  product: state.product,
  review: state.review
})

const mapDispatchToProps = dispatch => ({
  fetchReview: productId => dispatch(fetchReview(productId)),
  fetchProduct: productId => dispatch(fetchProduct(productId)),
  changeProduct: product => dispatch(changeProduct(product)),
  removeProduct: productId => dispatch(removeProduct(productId))
})

export default connect(mapStateToProps, mapDispatchToProps)(SingleProduct)
