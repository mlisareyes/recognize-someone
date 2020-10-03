import React, { Component } from 'react';
import {connect} from 'react-redux';
import {getRecognitions} from '../actions/getRecognitions'
import Newsfeed from '../components/Newsfeed'

class Recognitions extends Component {
  componentDidMount() {
    this.props.getRecognitions()
  }

  render() {
    return (
      <div>
        <Newsfeed recognitions={this.props.recognitions} />
      </div>
    )
  }
}

const mapStateToProps = ({ recognitions }) => {
  return {
    recognitions
  }
}

export default connect(mapStateToProps, {getRecognitions})(Recognitions)
