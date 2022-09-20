import React from 'react'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { setProducts, selectProducts } from '../actions/index'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import axios from 'axios'

class ProductShow extends React.Component {

  updateCart = () => {
    this.props.setProducts()
  }

  UNSAFE_componentWillReceiveProps(nextProps) {
    this.props.selectProducts(nextProps.products)
  }

  destroyProduct = () => {
    const url = `/products/${this.props.product.id}`;
    const token = document.querySelector('[name=csrf-token]').content
    axios.defaults.headers.common['X-CSRF-TOKEN'] = token
    axios.delete(url)
      .then(this.updateCart)
      .catch(error => console.log(error))
  }

  render () {
    return <h1>{this.props.product.name} <FontAwesomeIcon onClick={this.destroyProduct} icon={faTrash} /></h1>
  }
}

function mapDispatchToProps(dispach) {
  return bindActionCreators(
    { setProducts: setProducts,
      selectProducts: selectProducts
    },
    dispach
  );
}

function mapStateToProps(reduxState) {
  return {
    products: reduxState.products,
    selectProducts: reduxState.selectProducts
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(ProductShow)
