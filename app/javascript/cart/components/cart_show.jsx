import React from 'react'
import { connect } from 'react-redux';
import ProductShow from '../components/product_show'

class CartShow extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      input: null
    }
    this.handleChange = this.handleChange.bind(this)
  }

  handleSubmit = (e) => {
    e.preventDefault()
    const url = `/products`;
    fetch(url, {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: {product: JSON.stringify(e.target.value)},
    })
      .then((data) => {
        if (data.ok) {
          // this.reloadBeers();
          return data.json();
        }
        throw new Error("Network error.");
      })
      .catch((err) => message.error("Error: " + err));
  }

  handleChange = (e) => {
    this.setState({
      input: e.target.value
    })
  }

  render () {
    if (this.props.selectedCart) {
      const dateString = new Date(this.props.selectedCart.created_at).toDateString();
      return  <div>
                <h4 id={this.props.selectedCart.id}>{dateString}</h4>
                <form onSubmit={this.handleSubmit}>
                  <label>
                    Nom:
                    <input type="text" onChange={this.handleChange}/>
                  </label>
                  <input type="submit" value="Submit" className='btn btn-primary' />
                </form>
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
