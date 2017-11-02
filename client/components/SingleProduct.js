import React from 'react'
import {connect} from 'react-redux'
import { fetchProduct, changeProduct, removeProduct } from '../store'

class SingleProduct extends Component {

  componentDidMount() {
    this.props.fetchProduct(+this.props.match.params.productId)
  }

  render() {
    const product = this.props.product

    return (
      <div>
        {product}
      </div>
    )
  }
}

const mapStateToProps = (state) => ({ product: state.product })

const mapDispatchToProps = (dispatch) => ({
  fetchProduct: productId => dispatch(fetchProduct(productId)),
  changeProduct: product => dispatch(changeProduct(product)),
  removeProduct: productId => dispatch(removeProduct(productId))
})

export default connect(mapStateToProps, mapDispatchToProps)(SingleProduct)
