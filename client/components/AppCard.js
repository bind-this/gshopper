import React from 'react'
import { NavLink } from 'react-router-dom'
import { Card, Icon, Image, Rating } from 'semantic-ui-react'

const AppCard = (props) => (
  <Card raised>
      <NavLink to={`/products/${props.product.id}`}>
        <Image height="290px" src={props.product.img} />
      </NavLink>
      <Card.Content>
        <Card.Header>
          {props.product.name}
        </Card.Header>
        <Card.Meta>
          <span className='card-category'>
            {props.product.categories[0].name} <Rating defaultRating={3} maxRating={5} disabled />
          </span>
        </Card.Meta>
        <Card.Description>
          { props.product.description.slice(0, 70) }...
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
          <Icon name='user' />
          ${ props.product.price / 100 }
      </Card.Content>
    </Card>
)

export default AppCard
