import React from 'react'
import { connect } from 'react-redux'

import Carousel from 'nuka-carousel'
import { Icon, Menu } from 'semantic-ui-react'
import history from '../history'

function LandingPage(props) {
  //Pick ten apps starting from random location for carousel
  const start = Math.floor(Math.random() * 180) + 1
  const products25 = props.products.slice(start, start + 10)
  const categories = props.categories
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
            onClick={() => history.push(`/products/${product.id}`)}
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
          onClick={() => history.push(`/products?category=${categories[2].id}`)}
        >
          <Icon name="game" />
          Games
        </Menu.Item>
        <Menu.Item
          onClick={() => history.push(`/products?category=${categories[0].id}`)}
        >
          <Icon name="photo" />
          Photo & Video
        </Menu.Item>
        <Menu.Item
          onClick={() => history.push(`/products?category=${categories[1].id}`)}
        >
          <Icon name="heartbeat" />
          Health & Fitness
        </Menu.Item>
        <Menu.Item
          onClick={() => history.push(`/products?category=${categories[3].id}`)}
        >
          <Icon name="shopping bag" />
          Shopping
        </Menu.Item>
        <Menu.Item
          onClick={() => history.push(`/products?category=${categories[5].id}`)}
        >
          <Icon name="sun" />
          Weather
        </Menu.Item>
        <Menu.Item
          onClick={() => history.push(`/products?category=${categories[7].id}`)}
        >
          <Icon name="soccer" />
          Sports
        </Menu.Item>
        <Menu.Item
          onClick={() =>
            history.push(`/products?category=${categories[18].id}`)}
        >
          <Icon name="music" />
          Music
        </Menu.Item>
        <Menu.Item
          onClick={() =>
            history.push(`/products?category=${categories[11].id}`)}
        >
          <Icon name="comments" />
          Social
        </Menu.Item>
        <Menu.Item
          onClick={() =>
            history.push(`/products?category=${categories[19].id}`)}
        >
          <Icon name="newspaper" />
          News
        </Menu.Item>
        <Menu.Item
          onClick={() =>
            history.push(`/products?category=${categories[16].id}`)}
        >
          <Icon name="plane" />
          Travel
        </Menu.Item>
        <Menu.Item
          onClick={() =>
            history.push(`/products?category=${categories[10].id}`)}
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
  categories: state.categories,
  user: state.user
})
export default connect(mapState)(LandingPage)
