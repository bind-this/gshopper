import React from 'react'
import { Button } from 'semantic-ui-react'


export const UserEdit = props => {
  return (
    <form onSubmit={props.handleSubmit}>
    <h3>Edit Profile</h3>
      <h4>
        First Name:{' '}
        <input
          type='text'
          name='firstName'
          placeholder='optional'
          onChange={props.handleChange}
        />
      </h4>
      <h4>
        Last Name:{' '}
        <input
          type='text'
          name='lastName'
          placeholder='optional'
          onChange={props.handleChange}
        />
      </h4>
      <h4>
        Phone:{' '}
        <input
          type='text'
          name='phone'
          placeholder='optional'
          onChange={props.handleChange}
        />
      </h4>
      <h4>
        Address:{' '}
        <input
          type='text'
          name='address'
          placeholder='optional'
          onChange={props.handleChange}
        />
      </h4>
      <h4>
        City:{' '}
        <input
          type='text'
          name='city'
          placeholder='optional'
          onChange={props.handleChange}
        />
      </h4>
      <h4>
        Zip:{' '}
        <input
          type='text'
          name='zip'
          placeholder='optional'
          onChange={props.handleChange}
        />
      </h4>
      <h4>
        Image URL:{' '}
        <input
          type='text'
          name='img'
          placeholder='optional'
          onChange={props.handleChange}
        />
      </h4>
      <h4>
        email:{' '}
        <input
          type='text'
          name='email'
          placeholder='optional'
          onChange={props.handleChange}
        />
      </h4>
      <h4>
        password:{' '}
        <input
          type='text'
          name='password'
          placeholder='optional'
          onChange={props.handleChange}
        />
      </h4>
      <Button type='submit' >
        Submit Info
      </Button>
      <br /><br />
    </form>
  )
}
