'use strict';

import React from 'react';
import { connect } from 'react-redux';
import MapReview from './MapReview';
import AddReview from './AddReview';

const Review = (props) => {
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
    <div style={{ display: 'flex', justifyContent: 'center', padding: '1em' }}>
      <div className="ui comments">
        <h3 className="ui dividing header">Customer Reviews</h3>
        <MapReview reviews={props.reviews} />
        {visable ? <AddReview /> : ''}
      </div>
    </div>
  );
};

const mapStateToProps = state => ({
  user: state.user,
  product: state.product
});

export default connect(mapStateToProps)(Review);
