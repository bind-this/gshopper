import React, { Component } from 'react'
import { Card, Button, Grid } from 'semantic-ui-react'
import { addCategory } from '../../store'
import { connect } from 'react-redux'

let tempCategory = {}

class AddCategory extends Component {
  constructor(props) {
    super(props)
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(evt) {
    tempCategory[evt.target.name] = evt.target.value
  }

  handleSubmit(evt) {
    this.props.addCategory(tempCategory)
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <Card.Content>
          <Grid padded>
            <Grid.Row>
              <Grid.Column width={13}>
                <h3>
                  Category:{' '}
                  <input
                    type="text"
                    name="name"
                    placeholder={'Category'}
                    onChange={this.handleChange}
                  />
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
}

const mapState = state => {
  return {
    user: state.user
  }
}

const mapDispatch = dispatch => {
  return {
    addCategory: category => dispatch(addCategory(category))
  }
}

export default connect(mapState, mapDispatch)(AddCategory)
