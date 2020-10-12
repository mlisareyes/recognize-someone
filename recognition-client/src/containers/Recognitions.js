import React, { Component } from 'react';
import {connect} from 'react-redux';
import {getRecognitions} from '../actions/getRecognitions'
import {currentUser} from '../actions/currentUser'
import Newsfeed from '../components/Newsfeed'
import RecognitionForm from '../components/RecognitionForm'


class Recognitions extends Component {
  componentWillMount() {
    this.props.getRecognitions()
    this.props.currentUser()
  }

  render() {
    return (
      <div>
        <RecognitionForm
          currentUser={this.props.user}
        />
        <Newsfeed
          recognitions={this.props.recognitions}
        />
      </div>
    )
  }
}

const mapStateToProps = ({ recognitions, user }) => {
  return {
    recognitions: recognitions,
    user: user
  }
}

export default connect(mapStateToProps, {getRecognitions, currentUser})(Recognitions)
