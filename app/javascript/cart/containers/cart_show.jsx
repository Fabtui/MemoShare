import React from 'react'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import ProductShow from './product_show'
import TitleUpdateInput from '../components/title_update_input'
import { setProducts, setCarts, selectCart } from '../actions/index';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons'
import axios from 'axios'
import swal from 'sweetalert';


class CartShow extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      input: null,
      show_title_update: false,
    }
    this.handleChange = this.handleChange.bind(this)
    this.showTitleUpdate = this.showTitleUpdate.bind(this)
    this.cancelTitleUpdate = this.cancelTitleUpdate.bind(this)
  }

  UNSAFE_componentWillReceiveProps = () => {
    this.setState({
      show_title_update: false,
    })
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
    const url = `/carts/${this.props.selectedCart.id}`;
    const token = document.querySelector('[name=csrf-token]').content
    axios.defaults.headers.common['X-CSRF-TOKEN'] = token
    axios.delete(url)
      .then(this.updateCart)
      .catch(error => console.log(error))
  }

  sweetalert = () => {
    swal({
      title: "Es-tu sûre?",
      text: "",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    })
    .then((willDelete) => {
      if (willDelete) {
        this.destroyCart()
        swal("Panier supprimé!", {
          icon: "success",
        });
      } else {
        swal("Panier conservé!");
      }
    });
  }

  handleChange = (e) => {
    this.setState({
      input: e.target.value
    })
  }

  showTitleUpdate = () => {
    console.log(this.props.selectedCart.id);
    this.setState({
      show_title_update: !this.state.show_title_update,
    })
  }

  cancelTitleUpdate = () => {
    this.setState({
      show_title_update: false,
    })
  }

  render () {
    const selected_cart = this.props.selectedCart
    if (selected_cart) {
      const selectedProducts = this.props.products.filter(product => product.cart_id == selected_cart.id)
      const dateString = new Date(selected_cart.created_at).toDateString();
      const title = selected_cart.title ? selected_cart.title : dateString
      return  <div className='cart__show container'>
                <div className="product__content">
                  <div className="cart__show__header">
                    {this.state.show_title_update ?
                    <TitleUpdateInput cancelChange={this.cancelTitleUpdate}/> :
                    <h4 onClick={this.showTitleUpdate} id={selected_cart.id}>{title}</h4>
                    }
                    <FontAwesomeIcon onClick={this.sweetalert} icon={faXmark} />
                  </div>
                  <div id="product__list">
                    {selectedProducts.map(product => <ProductShow product={product} key= {product.id}/>)}
                  </div>
                </div>
                <div className="cart__show__form">
                  <form onSubmit={this.handleSubmit}>
                    <input id="form_input" type="text" onChange={this.handleChange}/>
                    <input type="submit" value="Ajouter" className='btn btn-secondary' />
                  </form>
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
     setCarts: setCarts,
     selectCart:selectCart,
  },
  dispach
  );
}


export default connect(mapStateToProps, mapDispatchToProps)(CartShow)
