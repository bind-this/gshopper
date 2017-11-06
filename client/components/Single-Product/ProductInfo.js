'use strict';

import React from 'react';

const ProductInfo = ({ product }) => (
  <div style={{ display: 'flex', flexDirection: 'column', margin: '1.5em' }}>
    <div>{product.author}</div>
    <div>
      { product.categories && product.categories.map(cat => cat.name).join(', ') }
    </div>
    <div style={{ margin: '1.5em', flexGrow: '2', display: 'flex', justifyContent: 'center' }}>
      <div>{product.description}</div>
    </div>
  </div>
);

export default ProductInfo;
