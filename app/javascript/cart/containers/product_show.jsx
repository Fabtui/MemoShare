import React from 'react'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { setProducts } from '../actions/index'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons'
import axios from 'axios'

class ProductShow extends React.Component {

  updateCart = () => {
    this.props.setProducts()
  }

  destroyProduct = () => {
    const url = `/products/${this.props.product.id}`;
    const token = document.querySelector('[name=csrf-token]').content
    axios.defaults.headers.common['X-CSRF-TOKEN'] = token
    axios.delete(url)
      .then(this.updateCart)
      .catch(error => console.log(error))
  }

  handleClick = () => {
    const url = `/products/${this.props.product.id}`;
    const token = document.querySelector('[name=csrf-token]').content
    axios.defaults.headers.common['X-CSRF-TOKEN'] = token
    axios.patch(url)
      .then(this.updateCart)
      .catch(error => console.log(error))
  }

  render () {
    const doneClass = this.props.product.done ? 'product__done' : 'product__undone'
    return <React.Fragment>
             <div className="product__item">
                <div className="product__item__content">
                  <span>- </span><h4 onClick={this.handleClick} className={doneClass}>{this.props.product.name}</h4>
                </div>
                <FontAwesomeIcon onClick={this.destroyProduct} icon={faXmark} />
             </div>
           </React.Fragment>
  }
}

function mapDispatchToProps(dispach) {
  return bindActionCreators(
    { setProducts: setProducts
    },
    dispach
  );
}

function mapStateToProps(reduxState) {
  return {
    products: reduxState.products,
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(ProductShow)
