import React from 'react'
import { Grid, Card, Icon, Image } from 'semantic-ui-react'

const OrderProd = props => {
  return (
    <Grid padded key={props.product.id}>
      <Grid.Row>
        <Grid.Column width={3}>
          <Card raised key={props.product.id}>
            <Image
              height="75px"
              width="75px"
              src={props.product.img}
              onClick={() => history.push(`/product/${props.product.id}`)}
              style={{ cursor: 'pointer' }}
            />
          </Card>
        </Grid.Column>
        <Grid.Column width={3}>
          <Card.Header
            onClick={() => history.push(`/product/${props.product.id}`)}
            style={{ cursor: 'pointer' }}
          >
            Product: {props.product.name}
          </Card.Header>
        </Grid.Column>
        <Grid.Column width={3}>
          <Card.Meta
            onClick={() => history.push(`/product/${props.product.id}`)}
            style={{ cursor: 'pointer' }}
          >
            <span className="quantity">
              Quantity Purchased: {props.orderProd.quantity}
            </span>
          </Card.Meta>
        </Grid.Column>
        <Grid.Column width={3}>
          <Card.Content
            extra
            onClick={() => history.push(`/product/${props.product.id}`)}
            style={{ cursor: 'pointer' }}
          >
            <Icon name="tag" />
            Price:{' '}
            {props.product.price ? '$' + props.product.price / 100 : 'Free'}
          </Card.Content>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  )
}

export default OrderProd
