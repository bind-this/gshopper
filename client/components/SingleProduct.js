import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Image, Container, Card, Comment } from 'semantic-ui-react';
import { fetchReview, fetchProduct, changeProduct, removeProduct } from '../store';

class SingleProduct extends Component {
  componentDidMount() {
    this.props.fetchProduct(+this.props.match.params.productId)
    this.props.fetchReview(+this.props.match.params.productId)
  }

  render() {
    const product = this.props.product;
    const productReviews = this.props.review
    if (!product || !productReviews) return ''
    const averageRating =
      product.reviews &&
      (product.reviews.reduce((accum, review) => {
        return accum + review.rating;
      }, 0) / product.reviews.length
      ).toFixed(2)

    return (

      <div>
        <div style={{ display: 'flex', flexDirection: 'row' }}>
          <div style={{ display: 'flex' }}>
            <Image src={ product.altImages && product.altImages[0] } />
            {
              console.log('reviews', productReviews)
              /*
              product.altImages &&
              product.altImages.map(image => (
                <div key={ image } >
                  <Image src={ image } />
                </div>
                ))
            */}
          </div>
          <div style={{ display: 'flex', flexDirection: 'row' }}>
            <Container style={{ display: 'flex', flexDirection: 'column' }}>
              <div>{ product.name }</div>
              <div>{ product.author }</div>
              <div>{ product.reviews && averageRating }</div>
              <div>{ product.category && product.category.join(', ') }</div>
              <div>{ product.description }</div>
            </Container>
            <Card style={{ display: 'flex', flexDirection: 'column' }}>
              <div>{ product.availability && product.availability ? 'yes' : 'no' }</div>
              <div>{ product.price ? `$${product.price}` : 'free' }</div>
              <div>{ product.quantity }</div>
            </Card>
          </div>
        </div>
        <div>
          reviews
          {<div>
            {productReviews &&
              productReviews.map(review => (
                <div key={review.id}>
                  <div>{ review.user.firstName }</div>
                  <div>{ review.user.lastName }</div>
                <Comment>{ review.comment }</Comment>
                </div>
              ))}
          </div>}
        </div>
      </div>
    );
  }
}

// on reviews use 'Elements/List/Animated' in semantic-ui

const mapStateToProps = state => ({
  product: state.product,
  review: state.review
});

const mapDispatchToProps = dispatch => ({
  fetchReview: reviewId => dispatch(fetchReview(reviewId)),
  fetchProduct: productId => dispatch(fetchProduct(productId)),
  changeProduct: product => dispatch(changeProduct(product)),
  removeProduct: productId => dispatch(removeProduct(productId))
});

export default connect(mapStateToProps, mapDispatchToProps)(SingleProduct);
