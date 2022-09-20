import React from 'react'
import { setCarts, setProducts } from '../actions/index';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import CartElement from '../components/cart_element';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import axios from 'axios'


class CartIndex extends React.Component {

  UNSAFE_componentWillMount() {
    this.props.setCarts();
    this.props.setProducts();
  }

  createCart = () => {
    const url = `/carts`;
    const token = document.querySelector('[name=csrf-token]').content
    axios.defaults.headers.common['X-CSRF-TOKEN'] = token
    axios.post(url, {cart: {}})
      .then(resp => this.displayNewEntry(resp.data.name))
      .catch(error => console.log(error))
  }

  render () {
    return <div className='app__container'>
        <FontAwesomeIcon onClick={this.createCart} icon={faPlus} />
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
