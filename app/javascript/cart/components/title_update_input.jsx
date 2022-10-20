import React from 'react'
import { connect } from 'react-redux';

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
    console.log(this.state.title);
  }

  cancelChange = () => {
    this.props.cancelChange()
  }

  render () {
    const selected_cart = this.props.selectedCart
    const dateString = new Date(selected_cart.created_at).toDateString();
    const title = selected_cart.title ? selected_cart.title : dateString
    return <React.Fragment>
            <form action="/action_page.php">
              {/* <label for="fname">First name:</label> */}
              <input onChange={this.handleChange} type="text" id="fname" name="fname" defaultValue={title}/>
              <div onClick={this.updateTitle} className='btn btn-primary'>O</div>
              <div onClick={this.cancelChange} className='btn btn-danger'>X</div>
            </form>
           </React.Fragment>
  }
}

function mapStateToProps(reduxState) {
  return {
    selectedCart: reduxState.selectedCart
  }
}


export default connect(mapStateToProps)(TitleUpdateInput)
