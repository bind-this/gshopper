import React from 'react'
import { connect } from 'react-redux'

import Carousel from 'nuka-carousel'
import CardList from './CardList'

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
        {products25.map(product => <img key={product.id} src={product.img} />)}
      </Carousel>
      <CardList products={products25} />
    </div>
  )
}

const mapState = state => ({
  products: state.products,
  user: state.user
})
export default connect(mapState)(LandingPage)
