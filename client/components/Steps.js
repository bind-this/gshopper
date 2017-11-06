'use strict'

import React from 'react'
import { Step, Icon } from 'semantic-ui-react'

const Steps = () => {
  console.log(location.pathname)
  return (
    <Step.Group fluid>
      <Step
        disabled={location.pathname !== '/cart'}
        completed={location.pathname !== '/cart'}
      >
        <Icon name="shop" />
        <Step.Content>
          <Step.Title>Cart</Step.Title>
          <Step.Description>
            Review your cart before proceeding to payment
          </Step.Description>
        </Step.Content>
      </Step>

      <Step
        disabled={location.pathname !== '/billing'}
        completed={location.pathname === '/confirmation'}
      >
        <Icon name="payment" />
        <Step.Content>
          <Step.Title>Billing</Step.Title>
          <Step.Description>Enter billing information</Step.Description>
        </Step.Content>
      </Step>

      <Step
        disabled={location.pathname !== '/confirmation'}
        completed={location.pathname === '/confirmation'}
      >
        <Icon name="info" />
        <Step.Content>
          <Step.Title>Order Confirmation</Step.Title>
        </Step.Content>
      </Step>
    </Step.Group>
  )
}

export default Steps
