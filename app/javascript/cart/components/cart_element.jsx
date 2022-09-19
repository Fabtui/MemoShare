import React from 'react'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { selectCart } from '../actions/index'

class CartElement extends React.Component {

  handleClick = () => {
    this.props.selectCart(this.props.cart)
  }

  render () {
    const dateString = new Date(this.props.cart.created_at).toDateString();
    return <h4 onClick={this.handleClick} id={this.props.cart.id}>{dateString}</h4>
  }
}

function mapDispatchToProps(dispach) {
  return bindActionCreators(
    { selectCart: selectCart
    },
    dispach
  );
}

function mapStateToProps(reduxState) {
  return {
    selectCart: reduxState.selectCart,
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(CartElement)
