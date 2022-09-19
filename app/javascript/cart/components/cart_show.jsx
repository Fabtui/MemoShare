import React from 'react'
import { connect } from 'react-redux';
import ProductShow from '../components/product_show'

class CartShow extends React.Component {

  render () {
    if (this.props.selectedCart) {
      const dateString = new Date(this.props.selectedCart.created_at).toDateString();
      return  <div>
                <h4 id={this.props.selectedCart.id}>{dateString}</h4>
                {this.props.selectedProducts.map(product => <ProductShow product={product} key= {product.id}/>)}
              </div>
    }
  }
}

function mapStateToProps(reduxState) {
  return {
    selectedCart: reduxState.selectedCart,
    selectedProducts: reduxState.selectedProducts
  }
}


export default connect(mapStateToProps)(CartShow)
