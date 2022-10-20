import React from 'react'
import { connect } from 'react-redux';
import axios from 'axios'

class TitleUpdateInput extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      title: this.props.selectedCart.title || new Date(this.props.selectedCart.created_at).toDateString(),
    }
    this.updateTitle = this.updateTitle.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange = (e) => {
    this.setState({
      title: e.target.value
    })
  }

  updateTitle = () => {
    const url = `/carts/${this.props.selectedCart.id}`;
    const token = document.querySelector('[name=csrf-token]').content
    axios.defaults.headers.common['X-CSRF-TOKEN'] = token
    axios.patch(url, {title: this.state.title})
    .then(this.props.updateCart)
    .then(this.props.cancelChange)
    .catch(error => console.log(error))
  }

  cancelChange = () => {
    this.props.cancelChange()
  }

  render () {
    const title = this.state.title
    return <div className='update__title__container'>
              <input onChange={this.handleChange} type="text" id="fname" name="fname" defaultValue={title}/>
              <div onClick={this.updateTitle} className='btn btn-primary'>O</div>
              <div onClick={this.cancelChange} className='btn btn-danger'>X</div>
           </div>
  }
}

function mapStateToProps(reduxState) {
  return {
    selectedCart: reduxState.selectedCart
  }
}

export default connect(mapStateToProps)(TitleUpdateInput)
