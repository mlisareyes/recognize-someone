import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux';
import { currentUser } from '../actions/currentUser';
import { logoutUser } from '../actions/logoutUser';

class NavBar extends Component {

  renderNavBar = (user) => {
    return (
      <div className="navbar">
      //Home ----....recognitions container
      //About
      //My Recognitions - all current user's recognitions
      //Logout
      <Link to="/home">Home</Link>
      <Link to="/about">About</Link>
      // <Link to="/">My Recognitions</Link>
      // <Link to="/" className="item" onClick={() => this.props.logoutUser(this.props.user.id)}>Log Out</Link>
      </div>
    )
  }
}

const mapStateToProps = ({ user }) => {
  return {
    user
  }
}

export default connect(mapStateToProps, { currentUser, logoutUser})(NavBar)
