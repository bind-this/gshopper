'use strict';

import React from 'react';
import MapReview from './MapReview';
import AddReview from './AddReview';

const review = ({ reviews }) => (
  <div>
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      <div className="ui comments">
        <h3 className="ui dividing header">Customer Reviews</h3>
        <MapReview reviews={ reviews } />
        <AddReview />
      </div>
    </div>
  </div>
);

export default review;
