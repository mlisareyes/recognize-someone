import React, { Component } from 'react';
import {connect} from 'react-redux';
import {getRecognitions} from '../actions/getRecognitions'
import {getUsers} from '../actions/getUsers'
import {currentUser} from '../actions/currentUser'
import Newsfeed from '../components/Newsfeed'
import RecognitionForm from '../components/RecognitionForm'


class Recognitions extends Component {
  componentWillMount() {
    this.props.getRecognitions()
    this.props.currentUser()
    this.props.getUsers()
  }

  render() {
    return (
      <div>
        <RecognitionForm
          currentUser={this.props.currentUser}
          users={this.props.users}
        />
        <Newsfeed
          recognitions={this.props.recognitions}
        />
      </div>
    )
  }
}

const mapStateToProps = ({ recognitions, currentUser, users }) => {
  return {
    recognitions: recognitions,
    currentUser: currentUser,
    users: users
  }
}

export default connect(mapStateToProps, {getRecognitions, currentUser, getUsers})(Recognitions)
