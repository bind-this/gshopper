import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Segment, Grid, Button, Header } from 'semantic-ui-react'
/**
 * COMPONENT
 */
export const UserHome = props => {
  const { email } = props

  return (
    <Grid textAlign="center" style={{ height: '100%' }} verticalAlign="middle">
      <Grid.Column style={{ maxWidth: 450 }}>
        <br />
        <br />
        <Segment raised>
          <Header as="h2" textAlign="center">
            Hey, {email}!
          </Header>
          <Button
            color="yellow"
            fluid
            size="large"
            onClick={() => history.push('/products')}
          >
            Let's Shop!
          </Button>
        </Segment>
      </Grid.Column>
    </Grid>
  )
}

/**
 * CONTAINER
 */
const mapState = state => {
  return {
    email: state.user.email
  }
}

export default connect(mapState)(UserHome)

/**
 * PROP TYPES
 */
UserHome.propTypes = {
  email: PropTypes.string
}
