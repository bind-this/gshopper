import React from 'react'
import { Grid } from 'semantic-ui-react'

import Steps from './Steps'

function Confirmation() {
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
