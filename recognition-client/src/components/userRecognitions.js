import React, { Component } from 'react'
// import React from 'react'
import {connect} from 'react-redux';
// import {getRecognitions} from '../actions/getRecognitions'
// import {currentUser} from '../actions/currentUser'


class UserRecognitions extends Component {  
  renderUserRecognitions = (recognitions) => {
    const filteredRecogs = recognitions.filter(recognition => recognition.attributes.receiver.id === Number(this.props.currentUser.id))
    return filteredRecogs.map((recog, index) => {
      return (
        <div className="recogs" key={index}>
          <p>{recog.attributes.content}</p>
          <p>Written By: {recog.attributes.author.first_name + " " + recog.attributes.author.last_name}</p>

        </div>
      )
    })
  }

  render() {
    return (
      <div className="user-recognition-container">
        {this.renderUserRecognitions(this.props.recognitions)}

      </div>
    )
  }
}

const mapStateToProps = ({ recognitions, currentUser }) => {
  return {
    recognitions: recognitions,
    currentUser: currentUser
  }
}

// export default UserRecognitions
export default connect (mapStateToProps)(UserRecognitions)
