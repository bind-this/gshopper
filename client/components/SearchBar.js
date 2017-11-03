import _ from 'lodash'
import React, { Component } from 'react'
import { Search, Label, Image } from 'semantic-ui-react'
import { connect } from 'react-redux'

const resultRenderer = ({ img, price, name, description }) => [
  <Image key={img} src={img} />,
  <div key={name} className="content">
    {' '}
    {price && <div className="price">{price}</div>}{' '}
    {name && <div className="name">{name}</div>}{' '}
    {description && (
      <div className="description">{description.slice(0, 20) + '...'}</div>
    )}{' '}
  </div>
]

const customSearchBar = props => {
  const products = props.products.map(product =>
    Object.assign(
      {},
      {
        name: product.name,
        description: product.description,
        img: product.img,
        price: product.price === 0 ? 'Free' : `$${product.price / 100}`,
        key: product.id
      }
    )
  )
  return <SearchBar resultRenderer={resultRenderer} products={products} />
}

class SearchBar extends Component {
  componentWillMount() {
    this.resetComponent()
  }

  resetComponent = () =>
    this.setState({ isLoading: false, results: [], value: '' })

  handleResultSelect = (e, { result }) => this.setState({ value: result.name })

  handleSearchChange = (e, { value }) => {
    this.setState({ isLoading: true, value })

    setTimeout(() => {
      if (this.state.value.length < 1) return this.resetComponent()

      const re = new RegExp(_.escapeRegExp(this.state.value), 'i')
      const isMatch = result => re.test(result.name)

      this.setState({
        isLoading: false,
        results: _.filter(this.props.products, isMatch)
      })
    }, 500)
  }

  render() {
    const { isLoading, value, results } = this.state

    return (
      <Search
        loading={isLoading}
        onResultSelect={this.handleResultSelect}
        onSearchChange={this.handleSearchChange}
        results={results}
        value={value}
        resultRenderer={resultRenderer}
        placeholder="Search..."
      />
    )
  }
}

const mapState = state => ({
  products: state.products
})

export default connect(mapState)(customSearchBar)
