import React, { Component } from "react";
import { Card, Button } from "semantic-ui-react";
import { UserEdit } from "./UserEdit";
import { updatingUser } from "../../store";
import { connect } from 'react-redux'

const tempUser = {};

class UserCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bool: false
    };
    this.onToggle = this.onToggle.bind(this);
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onToggle = () => {
    this.setState({ bool: !this.state.bool });
  };

  onChange(evt) {
    tempUser[evt.target.name] = evt.target.value;
    console.log(tempUser);
  }

  onSubmit(evt) {
    console.log("HEREERE")
    evt.preventDefault()
    this.props.updatingUser(tempUser, this.props.user.id)
  }

  render() {
    const user = this.props.user;
    return (
      <Card fluid raised>
        <Card.Content>
          <h3>User Profile</h3>
          <h4>
            User Name: {user.firstName} {user.lastName}
          </h4>
          <h4> Email: {user.email} </h4>
          <h4> Address: {user.address} </h4>
          <h4> City: {user.city} </h4>
          <h4> Zip: {user.zip} </h4>
          <Button onClick={this.onToggle}>Edit Profile</Button>
          <br />
          <br />
          {this.state.bool ? <UserEdit userCard={this} /> : ""}
        </Card.Content>
      </Card>
    );
  }
}

const mapState = (state) => {
  return {
    products: state.products,
    categories: state.categories,
    user: state.user
  }
}

const mapDispatch = dispatch => {
  return {
    updatingUser: user => dispatch(updatingUser(user))
  };
};

export default connect(mapState, mapDispatch)(UserCard);
