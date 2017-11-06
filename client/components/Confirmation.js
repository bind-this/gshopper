import React from 'react'
import { Elements } from 'react-stripe-elements'
import { Card, Label, Grid, Icon, Button } from 'semantic-ui-react'

import Checkout from './Checkout'
import Steps from './Steps'

function Confirmation(props) {
  return (
    <Grid centered columns={3}>
      <Grid.Column width={10}>
        <Steps />
        YOU DID IT
      </Grid.Column>
    </Grid>
  )
}

export default Confirmation
