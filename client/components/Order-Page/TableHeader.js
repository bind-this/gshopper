import React from 'react'
import { Table } from 'semantic-ui-react'

const TableHeader = props => {
  return (
    <Table.Header>
      <Table.Row>
        <Table.HeaderCell singleLine>
          Order ID: {props.order.id}
        </Table.HeaderCell>
        <Table.HeaderCell>Product Name</Table.HeaderCell>
        <Table.HeaderCell>Quantity Purchased</Table.HeaderCell>
        <Table.HeaderCell>Price Per Item</Table.HeaderCell>
        <Table.HeaderCell>Purchase Date</Table.HeaderCell>
      </Table.Row>
    </Table.Header>
  )
}

export default TableHeader
