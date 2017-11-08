'use strict';

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Rating } from 'semantic-ui-react';
import EditReviewButton from './EditReviewButton';
import DeleteReviewButton from './DeleteReviewButton';
import EditReviewForm from './EditReviewForm';


class MapReview extends Component {
  constructor(props) {
    super(props);
    this.state = {
      editId: 0
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(reviewId) {
    this.setState({ editId: reviewId });
  }

  render() {
    return (
      <div>
        {this.props.reviews &&
          this.props.reviews.map(review => (
            <div key={review.id}>
              {this.state.editId !== review.id ? (
                <div className="comment">
                  <a className="avatar">
                    <img src={review.user.img} />
                  </a>
                  <div className="content">
                    <a className="author">{`${review.user.firstName} ${review.user.lastName}`}</a>
                    <div className="metadata">
                      <Rating
                        icon="star"
                        defaultRating={review.rating}
                        maxRating={5}
                        disabled
                      />
                      <span className="date">
                        {new Date(review.createdAt).toString()}
                      </span>
                    </div>
                    <div className="text">{review.comment}</div>
                  </div>
                  {review.user.id === this.props.user.id ? (
                    <div className="ui buttons">
                      <EditReviewButton
                        review={review}
                        handleClick={this.handleClick}
                        editId={this.editId}
                      />
                      <DeleteReviewButton reviewId={review.id} />
                    </div>
                  ) : (
                    ''
                  )}
                </div>
              ) : (
                <div>
                  <EditReviewForm review={review} handleClick={this.handleClick} />
                </div>
              )}
            </div>
          ))}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  user: state.user,
  product: state.product
});

export default connect(mapStateToProps)(MapReview);
