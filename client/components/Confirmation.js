import React from 'react'
import { Segment, Grid, Button, Header } from 'semantic-ui-react'
import { connect } from 'react-redux'

import { sendEmail, me } from '../store'

import history from '../history'

class Confirmation extends React.Component {
  componentDidMount() {
    const mailOptions = {
      from: 'ethicalappstore@gmail.com',
      to: this.props.user.email,
      subject: 'Order Confirmation',
      text: 'You placed an amazing order. Thank you for choosing Ethical Apps.'
    }
    this.props.getUser()
    this.props.sendEmail(mailOptions)
  }

  render() {
    return (
      <Grid
        textAlign="center"
        style={{ height: '100%' }}
        verticalAlign="middle"
      >
        <Grid.Column style={{ maxWidth: 450 }}>
          <br />
          <br />
          <Segment raised>
            <Header as="h2" textAlign="center">
              Thanks{this.props.user.firstName &&
                ' ' + this.props.user.firstName}!
            </Header>
            <Button
              color="yellow"
              fluid
              size="large"
              onClick={() => history.push('/products')}
            >
              Continue Shopping
            </Button>
          </Segment>
        </Grid.Column>
      </Grid>
    )
  }
}

const mapState = state => ({
  user: state.user
})

const mapDispatch = dispatch => ({
  sendEmail: () => sendEmail(),
  getUser: () => dispatch(me())
})

export default connect(mapState, mapDispatch)(Confirmation)
