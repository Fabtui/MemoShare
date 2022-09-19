import React from 'react'

export default class CartElement extends React.Component {

  render () {
    return <h4 id={this.props.cart.id}>{this.props.cart.created_at}</h4>
  }
}
