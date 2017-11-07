import React from 'react'
import { Card, Label, Grid, Icon, Button } from 'semantic-ui-react'
import { connect } from 'react-redux'
import axios from 'axios'

import Steps from './Steps'

class Confirmation extends React.Component {
  componentDidMount() {
    const mailOptions = {
      from: 'ethicalappstore@gmail.com',
      to: this.props.user.email,
      subject: 'Order Confirmation',
      text: 'You placed an amazing order. Thank you for choosing Ethical Apps.'
    }
    // axios
    //   .post('/api/email', mailOptions)
    //   .then(res => console.log(res))
    //   .catch(err => console.error(err))
  }

  render() {
    return (
      <Grid centered columns={3}>
        <Grid.Column width={10}>
          <Steps />
          YOU DID IT
        </Grid.Column>
      </Grid>
    )
  }
}

const mapState = state => ({
  user: state.user
})

export default connect(mapState)(Confirmation)
