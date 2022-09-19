import React from 'react'
import { setCarts, setProducts } from '../actions/index';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import CartElement from '../components/cart_element';

class CartIndex extends React.Component {

  UNSAFE_componentWillMount() {
    this.props.setCarts();
    this.props.setProducts();
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
      setProducts: setProducts
  },
  dispach
  );
}

function mapStateToProps(reduxState) {
  return {
    carts: reduxState.carts,
    products: reduxState.products
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(CartIndex)
