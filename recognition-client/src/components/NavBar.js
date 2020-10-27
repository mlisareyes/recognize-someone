import React, { Component } from 'react'
// import { Link } from 'react-router-dom'
import { connect } from 'react-redux';
import { currentUser } from '../actions/currentUser';
import { logoutUser } from '../actions/logoutUser';
import { Navbar, Nav } from 'react-bootstrap'


class NavigationBar extends Component {

  render() {
    return (
      <Navbar bg="dark" variant="dark">
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Nav className="mr-auto">
        <Nav.Link href="/home">Home</Nav.Link>
        <Nav.Link href="/about">About</Nav.Link>
        <Nav.Link href="/myrecognitions">My Recognitions</Nav.Link>
        <Nav.Link href="/" className="item" onClick={() => this.props.logoutUser(this.props.currentUser.id)}>Log Out</Nav.Link>
      </Nav>
      </Navbar>
    )
  }
}

const mapStateToProps = ({ user }) => {
  return {
    user
  }
}

export default connect(mapStateToProps, { currentUser, logoutUser})(NavigationBar)
