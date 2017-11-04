import React from 'react'
import { NavLink } from 'react-router-dom'
import { Card, Icon, Image, Rating } from 'semantic-ui-react'
import history from '../history'

const AppCard = props => (
  <Card raised>
    <Image
      height="290px"
      src={props.product.img}
      onClick={() => history.push(`/product/${props.product.id}`)}
      style={{ cursor: 'pointer' }}
    />
    <Card.Content>
      <Card.Header
        onClick={() => history.push(`/product/${props.product.id}`)}
        style={{ cursor: 'pointer' }}
      >
        {props.product.name}
      </Card.Header>
      <Card.Meta>
        <span className="card-category">
          {props.product.categories[0].name}{' '}
          <Rating icon="star" defaultRating={3} maxRating={5} disabled />
        </span>
      </Card.Meta>
      <Card.Description>
        {props.product.description.slice(0, 70)}...
      </Card.Description>
    </Card.Content>
    <Card.Content extra>
      <Icon name="tag" />
      {props.product.price ? '$' + props.product.price / 100 : 'Free'}
      <Icon circular inverted color='grey' name='shop' />
    </Card.Content>
  </Card>
)

export default AppCard
