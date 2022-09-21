import React from 'react'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';


class CartElement extends React.Component {

  render () {
    const dateString = new Date(this.props.cart.created_at).toDateString();
    return <React.Fragment>
            <option value={this.props.cart.id} id={this.props.cart.id}>{dateString}</option>
           </React.Fragment>
  }
}

function mapStateToProps(reduxState) {
  return {
    selectCart: reduxState.selectCart,
    products: reduxState.products,
  }
}


export default connect(mapStateToProps)(CartElement)
