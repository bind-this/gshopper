'use strict'

import React from 'react'
import { Card, Label, Grid } from 'semantic-ui-react'
import Order from './Order'
import Steps from './Steps'

const Cart = () => (
  <Grid centered columns={3}>
    <Grid.Column width={10}>
      <Steps />
      <Order />
    </Grid.Column>
  </Grid>
)

export default Cart
