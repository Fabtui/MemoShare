import React from 'react'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { selectCart, selectProducts } from '../actions/index'

class CartElement extends React.Component {

  handleClick = () => {
    this.props.selectCart(this.props.cart)
    this.props.selectProducts(this.props.products.filter(product => product.cart_id == this.props.cart.id))
  }

  render () {
    const dateString = new Date(this.props.cart.created_at).toDateString();
    return <h4 onClick={this.handleClick} id={this.props.cart.id}>{dateString}</h4>
  }
}

function mapDispatchToProps(dispach) {
  return bindActionCreators(
    { selectCart: selectCart,
      selectProducts: selectProducts
    },
    dispach
  );
}

function mapStateToProps(reduxState) {
  return {
    selectCart: reduxState.selectCart,
    products: reduxState.products,
    selectProducts: reduxState.selectProducts
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(CartElement)
