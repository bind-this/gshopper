import React from 'react'
import { Header, Table, Image } from 'semantic-ui-react'
import history from '../../history'

const OrderAdminTable = props => {
  return (
    <Table.Body key={props.product.id}>
      <Table.Row>
        <Table.Cell>
          <Header as="h2" textAlign="center">
            <Image
              height="75px"
              width="75px"
              src={props.product.img}
              onClick={() => history.push(`/products/${props.product.id}`)}
              style={{ cursor: 'pointer' }}
            />
          </Header>
        </Table.Cell>
        <Table.Cell singleLine>{props.product.name}</Table.Cell>
        <Table.Cell>{props.orderProd.quantity}</Table.Cell>
        <Table.Cell textAlign="right">
          {props.product.price ? '$' + props.product.price / 100 : 'Free'}
        </Table.Cell>
      </Table.Row>
    </Table.Body>
  )
}

export default OrderAdminTable
