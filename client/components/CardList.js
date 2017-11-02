'use strict'

import React from 'react'
import { Card } from 'semantic-ui-react'
import AppCard from './AppCard'

const src = '/product-placeholder-image.jpg'


const CardList = (props) => (
  <div>
    <h1>{props.title} <small>({props.products.length})</small></h1>
    <Card.Group>
      { props.products.map(product => <AppCard raised key={product.id} product={product} />) }
    </Card.Group>
  </div>
)

export default CardList
