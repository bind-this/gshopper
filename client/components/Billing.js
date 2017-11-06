import React from 'react'
import { Elements } from 'react-stripe-elements'
import { Grid } from 'semantic-ui-react'
import { connect } from 'react-redux'

import Checkout from './Checkout'
import Steps from './Steps'

function Billing() {
  return (
    <Grid centered columns={3}>
      <Grid.Column width={10}>
        <Steps />
        <Elements>
          <Checkout />
        </Elements>
      </Grid.Column>
    </Grid>
  )
}

export default Billing
