import React, { Component } from 'react'
import { Button } from 'semantic-ui-react'
import { addCategory } from '../../store'
import { connect } from 'react-redux'

class AddCategory extends Component {
  constructor(props) {
    super(props)
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.tempCategory = {}
  }

  handleChange(evt) {
    this.tempCategory[evt.target.name] = evt.target.value
  }

<<<<<<< HEAD
  handleSubmit(evt) {
    evt.preventDefault()
    this.props.addCategory(this.tempCategory)
    this.props.hideForm()
=======
  handleSubmit() {
    this.props.addCategory(tempCategory)
>>>>>>> master
  }

  render() {
    return (
      <h3>
        <br />
        <br />
        <form onSubmit={this.handleSubmit}>
          Category:{' '}
          <input
            type="text"
            name="name"
            placeholder={'Category'}
            onChange={this.handleChange}
          />
          <Button type="submit">Submit Info</Button>
        </form>
      </h3>
    )
  }
}

const mapState = state => {
  return {
    categories: state.categories
  }
}

const mapDispatch = dispatch => {
  return {
    addCategory: category => dispatch(addCategory(category))
  }
}

export default connect(mapState, mapDispatch)(AddCategory)
