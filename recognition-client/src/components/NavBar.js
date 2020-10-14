import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux';
import { currentUser } from '../actions/currentUser';
import { logoutUser } from '../actions/logoutUser';


class NavBar extends Component {

  render() {
    return (
      <div className="navbar">

      <Link to="/home">Home</Link>---
      <Link to="/about">About</Link>---
      <Link to="/myrecognitions">My Recognitions</Link>---
      <Link to="/" className="item" onClick={() => this.props.logoutUser(this.props.currentUser.id)}>Log Out</Link>

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
