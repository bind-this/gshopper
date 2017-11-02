import React from 'react'
import { Card, Icon, Image, Rating } from 'semantic-ui-react'

const AppCard = (props) => (
  <Card raised>
    <Image src='/product-placeholder-image.jpg' />
    <Card.Content>
      <Card.Header>
        {props.product.name}
      </Card.Header>
      <Card.Meta>
        <span className='card-category'>
          {props.product.category} <Rating defaultRating={3} maxRating={5} disabled />
        </span>
      </Card.Meta>
      <Card.Description>
        { props.product.description }
      </Card.Description>
    </Card.Content>
    <Card.Content extra>
      <a>
        <Icon name='user' />
        ${ props.product.price / 100 }
      </a>
    </Card.Content>
  </Card>
)

export default AppCard
