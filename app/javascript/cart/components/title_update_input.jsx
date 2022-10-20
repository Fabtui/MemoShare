import React from 'react'
import { connect } from 'react-redux';

class TitleUpdateInput extends React.Component {

  render () {
    const selected_cart = this.props.selectedCart
    const dateString = new Date(selected_cart.created_at).toDateString();
    const title = selected_cart.title ? selected_cart.title : dateString
    console.log(title);
    console.log(selected_cart.title);
    return <React.Fragment>
            <form action="/action_page.php">
              {/* <label for="fname">First name:</label> */}
              <input type="text" id="fname" name="fname" value={title}/>
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
