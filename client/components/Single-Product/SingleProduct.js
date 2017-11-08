import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Grid, Segment, Image, Rating, Sticky } from 'semantic-ui-react'
import {
  fetchReview,
  fetchProduct,
  changeProduct,
  removeProduct
} from '../../store'
import Review from './Review'
import SalesInfoCard from './SalesInfoCard'
import ProductInfo from './ProductInfo'

class SingleProduct extends Component {
  constructor() {
    super()
    this.state = {}
  }

  handleContextRef = contextRef => this.setState({ contextRef })

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
    const { contextRef } = this.state
    return (
      <Grid padded>
        <Grid.Row>
          <Grid.Column width={4} />
          <Grid.Column width={3}>
            <Image
              height="175px"
              src={product.img}
              style={{
                borderRadius: '20px'
              }}
            />
          </Grid.Column>
          <Grid.Column width={5}>
            <h2> {product.name} </h2>
            <div>{product.author}</div>
            <div>
              {product.categories &&
                product.categories.map(cat => cat.name).join(', ')}
            </div>
            {averageRating ? (
              <Rating
                style={{ padding: '1em' }}
                icon="star"
                defaultRating={averageRating}
                maxRating={5}
                disabled
              />
            ) : (
              ''
            )}
          </Grid.Column>
          <Grid.Column width={3}>
            <Sticky context={contextRef}>
              <SalesInfoCard product={product} />
            </Sticky>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column width={4}>
            <Image
              src={product.altImages && product.altImages[0]}
              style={{ borderRadius: '6%', padding: '3%' }}
            />
          </Grid.Column>
          <Grid.Column width={8}>
            <Segment.Group raised>
              <ProductInfo product={product} />
              <Segment raised>
                <Review reviews={this.props.review} />
              </Segment>
            </Segment.Group>
          </Grid.Column>
          <Grid.Column width={4} />
        </Grid.Row>
      </Grid>
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
