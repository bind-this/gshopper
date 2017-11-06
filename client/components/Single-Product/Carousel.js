'use strict';

import React from 'react';
import { Image } from 'semantic-ui-react';

const Carousel = ({ product }) =>
  product.altImages &&
  product.altImages.map(image => (
    <div key={image}>
      <Image src={image} />
    </div>
  ));

export default Carousel;
