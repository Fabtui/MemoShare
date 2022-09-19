import React from 'react'
import { connect } from 'react-redux';

class CartShow extends React.Component {

  render () {
    if (this.props.selectedCart) {
      const dateString = new Date(this.props.selectedCart.created_at).toDateString();
      return <h4 id={this.props.selectedCart.id}>{dateString}</h4>
    }
  }
}

function mapStateToProps(reduxState) {
  return {
    selectedCart: reduxState.selectedCart,
  }
}


export default connect(mapStateToProps)(CartShow)
