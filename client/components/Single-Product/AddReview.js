'use strict';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { makeReview } from '../../store';


class AddReview extends Component {
  constructor(props) {
    super(props)
    this.tempReview = {}
    this.handleCommentChange = this.handleCommentChange.bind(this)
    this.handleRatingChange = this.handleRatingChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleCommentChange(event) {
    this.tempReview[event.target.name] = event.target.value
  }

  handleRatingChange(event) {
    this.tempReview.userId = this.props.user.id
    this.tempReview.productId = this.props.product.id
    this.tempReview[event.target.name] = event.target.value
  }

  handleSubmit(event) {
    event.preventDefault()
    this.props.makeReview(this.tempReview, this.props.product.id)
  }

  render() {
    //let user = this.props.user
/* <div>{ user.orders && user.orders.some(order => order.order_products.map(obj => obj.prod.id).join(', ')  // .includes(this.props.product.id)) }</div> */

    return (
      <div>
          <form onSubmit={this.handleSubmit} className="ui reply form" >
            Submit Review
            <textarea
              type="text"
              placeholder="submit review here"
              className="field"
              name="comment"
              onChange={ this.handleCommentChange }
            />
            <select
              className="field"
              required="required"
              name="rating"
              onChange={ this.handleRatingChange }
            >
              <option />
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
            </select>
          <button type="submit" className="ui blue labeled submit icon button" >Submit Review</button>
          </form>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  review: state.review,
  user: state.user,
  product: state.product
});

const mapDispatchToProps = dispatch => ({
  makeReview: (review, productId) => dispatch(makeReview(review, productId))
});


export default connect(mapStateToProps, mapDispatchToProps)(AddReview);
