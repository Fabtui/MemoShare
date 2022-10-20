import React from 'react'
import { connect } from 'react-redux';

class TitleUpdateInput extends React.Component {

  render () {
    // const title = this.props.selectCart.title ? this.props.selectCart.title : dateString
    return <React.Fragment>
            <form action="/action_page.php">
              {/* <label for="fname">First name:</label> */}
              <input type="text" id="fname" name="fname" value='title'/>
            </form>
           </React.Fragment>
  }
}

function mapStateToProps(reduxState) {
  return {
    selectCart: reduxState.selectCart,
  }
}

export default connect(mapStateToProps)(TitleUpdateInput)
