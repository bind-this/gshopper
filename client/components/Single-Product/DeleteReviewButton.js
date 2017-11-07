'use strict';

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { deleteReview } from '../../store';

class DeleteReviewButton extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.props.deleteReview(this.props.review, this.props.product.id);
  }

  render() {
    return (
      <button
        type="submit"
        className="mini ui button"
        style={{ padding: '1em' }}
        onClick={ () => this.handleClick() }
      >
        Delete
      </button>
    );
  }
}

const mapStateToProps = state => ({ product: state.product })

const mapDispatchToProps = dispatch => ({
  deleteReview: (reviewId, productId) => dispatch(deleteReview(reviewId, productId))
});

export default connect(mapStateToProps, mapDispatchToProps)(DeleteReviewButton);
