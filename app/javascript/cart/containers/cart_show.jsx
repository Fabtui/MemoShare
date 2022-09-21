import React from 'react'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import ProductShow from './product_show'
import { setProducts, setCarts } from '../actions/index';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import axios from 'axios'

class CartShow extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      input: null,
    }
    this.handleChange = this.handleChange.bind(this)
  }

  updateCart = () => {
    document.querySelector('#form_input').value = ''
    this.props.setCarts()
    this.props.setProducts()
  }

  handleSubmit = (e) => {
    e.preventDefault()
    const url = `/products`;
    const token = document.querySelector('[name=csrf-token]').content
    axios.defaults.headers.common['X-CSRF-TOKEN'] = token
    axios.post(url, {product: {name: this.state.input, cart_id: this.props.selectedCart.id}})
      .then(this.updateCart)
      .catch(error => console.log(error))
  }

  destroyCart = () => {
    const url = `/carts/${this.props.cart.id}`;
    const token = document.querySelector('[name=csrf-token]').content
    axios.defaults.headers.common['X-CSRF-TOKEN'] = token
    axios.delete(url)
      .then(this.updateCarts)
      .catch(error => console.log(error))
  }


  handleChange = (e) => {
    this.setState({
      input: e.target.value
    })
  }

  render () {
    if (this.props.selectedCart) {
      const selectedProducts = this.props.products.filter(product => product.cart_id == this.props.selectedCart.id)
      const dateString = new Date(this.props.selectedCart.created_at).toDateString();
      return  <div>
                <h4 id={this.props.selectedCart.id}>{dateString}</h4><FontAwesomeIcon onClick={this.destroyCart} icon={faTrash} />
                <form onSubmit={this.handleSubmit}>
                  <label>
                    Nom:
                    <input id="form_input" type="text" onChange={this.handleChange}/>
                  </label>
                  <input type="submit" value="Submit" className='btn btn-primary' />
                </form>
                <div id="product_list">
                  {selectedProducts.map(product => <ProductShow product={product} key= {product.id}/>)}
                </div>
              </div>
    }
  }
}

function mapStateToProps(reduxState) {
  return {
    products: reduxState.products,
    selectedCart: reduxState.selectedCart
  }
}

function mapDispatchToProps(dispach) {
  return bindActionCreators(
    {setProducts: setProducts,
     setCarts: setCarts
  },
  dispach
  );
}


export default connect(mapStateToProps, mapDispatchToProps)(CartShow)
