import React from 'react'

export default class ProductShow extends React.Component {

  render () {
    return <h1>{this.props.product.name}</h1>
  }
}
