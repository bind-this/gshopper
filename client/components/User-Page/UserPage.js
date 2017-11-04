import React, { Component } from "react";
import { Card, Grid, Image } from "semantic-ui-react";
import { connect } from "react-redux";
import UserCard from "./UserCard";
import UserOrderHist from "./UserOrderHist";
import UserCart from "./UserCart";

class UserPage extends Component {
  constructor(props) {
    super(props);
  }

  state = {};
  handleContextRef = contextRef => this.setState({ contextRef });

  render() {
    const user = this.props.user;
    return (
      <Grid padded>
        <Grid.Row>
          <Grid.Column width={3}>
            <Card raised>
              <Card.Content>
                <Image centered src={user.img} />
              </Card.Content>
            </Card>
          </Grid.Column>
          <Grid.Column width={8}>
            <UserCard user={user} />
          </Grid.Column>
          <Grid.Column width={4}>
            <UserCart />
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column width={15}>
            <UserOrderHist user={user} />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    );
  }
}

const mapState = state => {
  return {
    user: state.user
  };
};

export default connect(mapState)(UserPage);
