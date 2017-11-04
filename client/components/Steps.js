'use strict'

import React from 'react'
import { Step, Icon } from 'semantic-ui-react'

const Steps = () => (
  <Step.Group>
    <Step>
      <Icon name='shop' />
      <Step.Content>
        <Step.Title>Cart</Step.Title>
        <Step.Description>Review your cart before proceeding to payment</Step.Description>
      </Step.Content>
    </Step>

    <Step disabled>
      <Icon name='payment' />
      <Step.Content>
        <Step.Title>Billing</Step.Title>
        <Step.Description>Enter billing information</Step.Description>
      </Step.Content>
    </Step>

    <Step disabled>
      <Icon name='info' />
      <Step.Content>
        <Step.Title>Order Confirmation</Step.Title>
      </Step.Content>
    </Step>
  </Step.Group>
)

export default Steps