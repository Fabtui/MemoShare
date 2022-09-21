import React from 'react'
import { setCarts, setProducts, selectCart } from '../actions/index';
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

  updateCarts = () => {
    this.props.setCarts()
  }

  handleChange = (e) => {
    if (e.target.value == 0) {return}
    const cart = this.props.carts.find(cart => cart.id == e.target.value);
    this.props.selectCart(cart)
  }

  createCart = () => {
    const url = `/carts`;
    const token = document.querySelector('[name=csrf-token]').content
    axios.defaults.headers.common['X-CSRF-TOKEN'] = token
    axios.post(url, {cart: {}})
      .then(this.updateCarts)
      .catch(error => console.log(error))
  }

  render () {
    return <div className='app__container'>
            <div className="header">
              <div className="input-group">
                <div className="input-group-prepend">
                  <label className="input-group-text" htmlFor="inputGroupSelect01">Paniers</label>
                </div>
                <select onChange={this.handleChange} className="custom-select" id="inputGroupSelect01">
                  <option defaultValue value={0}>Choisir...</option>
                  {this.props.carts.map(cart => <CartElement key={cart.id} cart={cart}/>)}
                </select>
              </div>
                <div className="header__add">
                  <FontAwesomeIcon onClick={this.createCart} icon={faPlus} />
                </div>
              </div>
            </div>
  }
}

function mapDispatchToProps(dispach) {
  return bindActionCreators(
    { setCarts: setCarts,
      setProducts: setProducts,
      selectCart:selectCart,
  },
  dispach
  );
}

function mapStateToProps(reduxState) {
  return {
    carts: reduxState.carts,
    products: reduxState.products,
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(CartIndex)
