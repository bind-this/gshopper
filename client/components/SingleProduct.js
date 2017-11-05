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

console.log('product', product)
console.log('reviews', productReviews)

    return (
      <div>
        <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around' }} >
          <img style={{ borderRadius: '15%' }} src={ product.img } />
          <h1 style={{ fontSize: '3em' }} >{ product.name }</h1>
          <div>{ product.reviews && averageRating }</div>
        </div>
        <div style={{ display: 'flex', flexDirection: 'row' }}>
          <div style={{ display: 'flex' }}>
            <Image src={ product.altImages && product.altImages[0] } />
            {
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
              <div>{ product.author }</div>
              <div>{ product.categories && product.categories.map(cat => cat.name).join(', ') }</div>
              <div>{ product.description }</div>
            </Container>

            <div className="ui cards">
              <div className="card">
                <div className="content">
                  <div className="header">Elliot Fu</div>
                    <div className="description">Elliot Fu is a film-maker from New York.</div>
                    <div>{ product.availability && product.availability ? '' : <b style={{ fontSize: '1.5em' }} >Currently Unavailable</b> }</div>
                    <div>Price: { product.price ? `$${product.price}` : 'free' }</div>
                    <div>Quantity: { product.quantity }</div>
                  </div>
                  <div className="ui bottom attached button">
                    <i className="add icon" />
                    Add To Cart
                  </div>
                </div>
              </div>
          </div>
        </div>
        <div style={{ display: 'flex', justifyContent: 'center' }} >
          <div className="ui comments">
            <h3 className="ui dividing header">Customer Reviews</h3>
          <div>
            { productReviews &&
              productReviews.map(review => (
                <div className="comment" key={review.id} >
                  <a className="avatar" >
                    <img src={ review.user.img } />
                  </a>
                  <div className="content">
                    <a className="author">{ `${review.user.firstName} ${review.user.lastName}` }</a>
                    <div className="metadata">
                      <span>{ review.rating }</span>
                      <span className="date">{ new Date(review.createdAt).toString() }</span>
                    </div>
                    <div className="text">{ review.comment }</div>
                  </div>
                </div>
              ))}
          </div>
            <form className="ui reply form">
              <div className="field">
                <textarea />
              </div>
              <div className="ui blue labeled submit icon button">
                <i className="icon edit" /> Add Reply
              </div>
            </form>
          </div>
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
