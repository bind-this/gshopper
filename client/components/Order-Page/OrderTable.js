import React from 'react'
import { Header, Table, Image } from 'semantic-ui-react'

const OrderTable = props => {
  return (
    <Table.Body key={props.product.id}>
      <Table.Row>
        <Table.Cell>
          <Header as="h2" textAlign="center">
            <Image
              height="75px"
              width="75px"
              src={props.product.img}
              onClick={() => history.push(`/product/${props.product.id}`)}
              style={{ cursor: 'pointer' }}
            />
          </Header>
        </Table.Cell>
        <Table.Cell singleLine>{props.product.name}</Table.Cell>
        <Table.Cell>{props.orderProd.quantity}</Table.Cell>
        <Table.Cell textAlign="right">
          {props.product.price ? '$' + props.product.price / 100 : 'Free'}
        </Table.Cell>
        <Table.Cell>
          {props.product.price ? '$' + props.product.price / 100 : 'Free'}
        </Table.Cell>
      </Table.Row>
    </Table.Body>
  )
}

export default OrderTable
