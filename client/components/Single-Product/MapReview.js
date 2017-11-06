'use strict'

import React from 'react';
import { Rating } from 'semantic-ui-react';

const MapReview = ({ reviews }) => (
  <div>
    {reviews &&
      reviews.map(review => (
        <div className="comment" key={ review.id }>
          <a className="avatar">
            <img src={ review.user.img } />
          </a>
          <div className="content">
            <a className="author">{`${review.user.firstName} ${review.user.lastName}`}</a>
            <div className="metadata">
              <Rating
                icon="star"
                defaultRating={ review.rating }
                maxRating={ 5 }
                disabled
              />
              <span className="date">
                { new Date(review.createdAt).toString() }
              </span>
            </div>
            <div className="text">{ review.comment }</div>
          </div>
        </div>
      ))}
  </div>
);

export default MapReview
