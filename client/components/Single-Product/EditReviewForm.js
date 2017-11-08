'use strict';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { editReview } from '../../store';

class EditReviewForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      comment: this.props.review.comment,
      rating: this.props.review.rating
    };
    this.handleCommentChange = this.handleCommentChange.bind(this);
    this.handleRatingChange = this.handleRatingChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleCommentChange(event) {
    this.setState({ comment: event.target.value })
  }

  handleRatingChange(event) {
    this.setState({ rating: event.target.value })
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.handleClick(0)
    this.props.editReview(this.state, this.props.review.id, this.props.product.id);
  }

  render() {
    let review = this.props.review
    let user = review.user

    return (
      <div>
        <div className="comment">
          <a className="avatar">
            <img src={ user && user.img } />
          </a>
          <div className="content">
            <a className="author">{ user && `${user.firstName} ${user.lastName}`}</a>
          </div>
        </div>
        <form onSubmit={ this.handleSubmit } className="ui reply form">
          <textarea
            type="text"
            className="field"
            value={ this.state.comment }
            name="comment"
            onChange={ this.handleCommentChange }
          />
          <select
            className="field"
            required="required"
            value={ this.state.rating }
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
          <button
            type="submit"
            className="ui blue labeled submit icon button"
            style={{ margin: '0.5em' }}
          >
            Edit Review
          </button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  user: state.user,
  product: state.product
});

const mapDispatchToProps = dispatch => ({
  editReview: (newReview, reviewId, productId) => dispatch(editReview(newReview, reviewId, productId))
});

export default connect(mapStateToProps, mapDispatchToProps)(EditReviewForm);
