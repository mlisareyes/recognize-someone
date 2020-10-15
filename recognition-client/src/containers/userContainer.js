import React, { Component } from 'react';
import {connect} from 'react-redux'
import {getRecognitions} from '../actions/getRecognitions'
import {currentUser} from '../actions/currentUser'
import UserRecognitions from '../components/UserRecognitions'
import NavBar from '../components/NavBar'

class UserContainer extends Component {
  componentDidMount() {
    this.props.getRecognitions()
    this.props.currentUser()
  }

  render() {
    return (
      <div>
        <NavBar />
        <UserRecognitions
          recognitions={this.props.recognitions}
          currentUser={this.props.currentUser}
        />
      </div>
    )
  }
}

const mapStateToProps = ({recognitions, currentUser}) => {
  return {
    recognitions: recognitions,
    currentUser: currentUser
  }
}


export default connect (mapStateToProps, {getRecognitions, currentUser})(UserContainer)
