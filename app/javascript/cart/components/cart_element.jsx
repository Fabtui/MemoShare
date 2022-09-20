import React from 'react'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import axios from 'axios'
import { selectCart, selectProducts, setCarts } from '../actions/index'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'

class CartElement extends React.Component {

  handleClick = () => {
    this.props.selectCart(this.props.cart)
    this.props.selectProducts(this.props.products.filter(product => product.cart_id == this.props.cart.id))
  }

  updateCarts = () => {
    this.props.setCarts()
  }

  destroyCart = () => {
    const url = `/carts/${this.props.cart.id}`;
    const token = document.querySelector('[name=csrf-token]').content
    axios.defaults.headers.common['X-CSRF-TOKEN'] = token
    axios.delete(url)
      .then(this.updateCarts)
      .catch(error => console.log(error))
  }

  render () {
    const dateString = new Date(this.props.cart.created_at).toDateString();
    return <React.Fragment>
             <h4 onClick={this.handleClick} id={this.props.cart.id}>{dateString}</h4>
             <FontAwesomeIcon onClick={this.destroyCart} icon={faTrash} />
           </React.Fragment>
  }
}

function mapDispatchToProps(dispach) {
  return bindActionCreators(
    { selectCart: selectCart,
      selectProducts: selectProducts,
      setCarts: setCarts
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
