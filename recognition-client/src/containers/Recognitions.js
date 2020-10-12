import React, { Component } from 'react';
import {connect} from 'react-redux';
import {getRecognitions} from '../actions/getRecognitions'
import {createRecognition} from '../actions/createRecognition'
import Newsfeed from '../components/Newsfeed'
import RecognitionForm from '../components/RecognitionForm'


class Recognitions extends Component {
  componentWillMount() {
    this.props.getRecognitions()
  }
  shouldComponentUpdate(){
    return true
  }

  render() {
    return (
      <div>
        <RecognitionForm />
        <Newsfeed recognitions={this.props.recognitions} />
      </div>
    )
  }
}

const mapStateToProps = ({ recognitions }) => {
  return {
    recognitions: recognitions
  }
}

export default connect(mapStateToProps, {getRecognitions, createRecognition})(Recognitions)
