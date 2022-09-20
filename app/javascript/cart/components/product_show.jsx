import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'

export default class ProductShow extends React.Component {

  destroyProduct = () => {
    const url = `/products/${this.props.product.id}`;
    const token = document.querySelector('[name=csrf-token]').content
    axios.defaults.headers.common['X-CSRF-TOKEN'] = token
    axios.delete(url)
      .then(resp => console.log(resp))
      .catch(error => console.log(error))
  }

  render () {
    return <h1>{this.props.product.name} <FontAwesomeIcon onClick={this.destroyProduct} icon={faTrash} /></h1>
  }
}
