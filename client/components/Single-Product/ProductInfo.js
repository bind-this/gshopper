'use strict'

import React from 'react'

const ProductInfo = ({ product }) => (
  <div style={{ display: 'flex', flexDirection: 'column', margin: '1.5em' }}>
    <div>Product Description:</div>
    <div
      style={{
        margin: '1.5em',
        flexGrow: '2',
        display: 'flex',
        justifyContent: 'center'
      }}
    >
      <div>{product.description}</div>
    </div>
  </div>
)

export default ProductInfo
