import React from 'react'
import { setCarts } from '../actions/index';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import CartElement from '../components/cart_element';

class CartIndex extends React.Component {

  UNSAFE_componentWillMount() {
    this.props.setCarts();
  }

  render () {
    return <div className='app__container'>
        {this.props.carts.map(cart => <CartElement key={cart.id} cart={cart}/>)}
      </div>
  }
}

function mapDispatchToProps(dispach) {
  return bindActionCreators(
    { setCarts: setCarts,
  },
  dispach
  );
}

function mapStateToProps(reduxState) {
  return {
    carts: reduxState.carts,
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(CartIndex)
