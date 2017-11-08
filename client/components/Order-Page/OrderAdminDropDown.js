import React from 'react'

const OrderAdminDropDown = props => {
  return (
    <h3>
      <select onChange={props.filterSelect} name="order">
        <option />
        <option value="created">Created</option>
        <option value="completed">Completed</option>
        <option value="processing">Processing</option>
        <option value="cancelled">Cancelled</option>
      </select>
    </h3>
  )
}

export default OrderAdminDropDown
