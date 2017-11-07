'use strict'

import React from 'react'

const SalesInfoCard = ({ product }) => (
  <div className="ui cards" style={{ display: 'flex', flexGrow: '1' }} >
  <div className="card">
    <div className="content">
      <div className="header">Sales Info</div>
        <div className="description"></div>
        <div>{ product.availability && product.availability ? '' : <b style={{ fontSize: '1.5em' }} >Currently Unavailable</b> }</div>
        <div>Price: { product.price ? `$${ product.price / 100 }` : 'free' }</div>
        <div>Quantity: { product.quantity }</div>
      </div>
      <div className="ui bottom attached button">
        <i className="add icon" />
        Add To Cart
      </div>
    </div>
  </div>
)

export default SalesInfoCard
