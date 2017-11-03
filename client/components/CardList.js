'use strict'

import React from 'react'
import { Card, Label } from 'semantic-ui-react'
import AppCard from './AppCard'

const src = '/product-placeholder-image.jpg'

const CardList = (props) => (
  <div>
    <h1>Displaying { props.category || 'All Products'} {props.search ? ', matching \'' + props.search + '\'' : '' } <Label circular color="red">{props.products.length}</Label></h1>
    <Card.Group>
      { props.products.map(product => <AppCard raised key={product.id} product={product} />) }
    </Card.Group>
  </div>
)

export default CardList
