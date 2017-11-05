import React from 'react'
import { connect } from 'react-redux'

import Carousel from 'nuka-carousel'
import { Icon, Menu } from 'semantic-ui-react'
import history from '../history'

function LandingPage(props) {
  const products25 = props.products.slice(27, 52)
  return (
    <div>
      <Carousel
        wrapAround={true}
        autoplay={true}
        slidesToShow={5}
        cellAlign="center"
        cellSpacing={20}
        style={{ height: '400px' }}
        initialSlideHeight={400}
      >
        {products25.map(product => (
          <img
            key={product.id}
            src={product.img}
            onClick={() => history.push(`/product/${product.id}`)}
            style={{ cursor: 'pointer' }}
          />
        ))}
      </Carousel>
      <br />
      <Menu icon="labeled" widths={12}>
        <Menu.Item onClick={() => history.push(`/products`)}>
          <Icon name="grid layout" />
          All
        </Menu.Item>
        <Menu.Item
          onClick={() => history.push(`/products?category=${'games'}`)}
        >
          <Icon name="game" />
          games
        </Menu.Item>
        <Menu.Item
          onClick={() => history.push(`/products?category=${'Photo & Video'}`)}
        >
          <Icon name="photo" />
          Photo & Video
        </Menu.Item>
        <Menu.Item
          onClick={() =>
            history.push(`/products?category=${'Health & Fitness'}`)}
        >
          <Icon name="heartbeat" />
          Health & Fitness
        </Menu.Item>
        <Menu.Item
          onClick={() => history.push(`/products?category=${'Shopping'}`)}
        >
          <Icon name="shopping bag" />
          Shopping
        </Menu.Item>
        <Menu.Item
          onClick={() => history.push(`/products?category=${'Weather'}`)}
        >
          <Icon name="sun" />
          Weather
        </Menu.Item>
        <Menu.Item
          onClick={() => history.push(`/products?category=${'Sports'}`)}
        >
          <Icon name="soccer" />
          Sports
        </Menu.Item>
        <Menu.Item
          onClick={() => history.push(`/products?category=${'Music'}`)}
        >
          <Icon name="music" />
          Music
        </Menu.Item>
        <Menu.Item
          onClick={() =>
            history.push(`/products?category=${'Social Netowrking'}`)}
        >
          <Icon name="comments" />
          Social
        </Menu.Item>
        <Menu.Item onClick={() => history.push(`/products?category=${'News'}`)}>
          <Icon name="newspaper" />
          News
        </Menu.Item>
        <Menu.Item
          onClick={() => history.push(`/products?category=${'Travel'}`)}
        >
          <Icon name="plane" />
          Travel
        </Menu.Item>
        <Menu.Item
          onClick={() => history.push(`/products?category=${'Education'}`)}
        >
          <Icon name="book" />
          Education
        </Menu.Item>
      </Menu>
    </div>
  )
}

const mapState = state => ({
  products: state.products,
  user: state.user
})
export default connect(mapState)(LandingPage)
