'use strict';

import React from 'react';
import { connect } from 'react-redux';
import { Rating } from 'semantic-ui-react';
import EditReviewButton from './EditReviewButton';
import DeleteReviewButton from './DeleteReviewButton';

const MapReview = props => {
  let user = props.user;
  let visable = false;
  visable =
    user &&
    user.orders &&
    user.orders[0].order_products &&
    user.orders.some(order =>
      order.order_products.some(obj => obj.product.id === props.product.id)
    );

  return (
    <div>
      {props.reviews &&
        props.reviews.map(review => (
          <div className="comment" key={review.id}>
            <a className="avatar">
              <img src={review.user.img} />
            </a>
            <div className="content">
              <a className="author">{`${review.user.firstName} ${review.user
                .lastName}`}</a>
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
            { visable && review.user.id === props.user.id
              ? <div className="ui buttons">
                  <EditReviewButton review={review.id} />
                  <DeleteReviewButton review={review.id} />
                </div>
              : ''
            }
          </div>
        ))}
    </div>
  );
};

const mapStateToProps = state => ({
  user: state.user,
  product: state.product
});

export default connect(mapStateToProps)(MapReview);
