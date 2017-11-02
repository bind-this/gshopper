'use strict'

import React from 'react'
import { Card } from 'semantic-ui-react'
import AppCard from './AppCard'

const src = '/product-placeholder-image.jpg'

const CardList = () => (
  <div>
    <h1>APPS</h1>
    <Card.Group>
      <AppCard raised image={src} />
      <AppCard raised image={src} />
      <AppCard raised image={src} />
      <AppCard raised image={src} />
      <AppCard raised image={src} />
      <AppCard raised image={src} />
      <AppCard raised image={src} />
      <AppCard raised image={src} />
      <AppCard raised image={src} />
      <AppCard raised image={src} />
      <AppCard raised image={src} />
      <AppCard raised image={src} />
    </Card.Group>
  </div>
)

export default CardList
