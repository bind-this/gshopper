import React from 'react'
import { Card, Button, Grid } from 'semantic-ui-react'

export const AddProduct = props => {
  return (
    <form onSubmit={props.handleSubmit}>
      <Card.Content>
        <Grid padded>
          <Grid.Row>
            <Grid.Column width={6}>
              <h3>
                First Name :{' '}
                <input type="text" name="firstName" placeholder="" />
              </h3>
              <h3>
                Last Name : <input type="text" name="lastName" placeholder="" />
              </h3>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Card.Content>
      <Button type="submit">Submit Info</Button>
      <br />
      <br />
    </form>
  )
}
