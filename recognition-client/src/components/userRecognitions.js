import React, { Component } from 'react'
// import React from 'react'
import {connect} from 'react-redux';
import {getRecognitions} from '../actions/getRecognitions'


class UserRecognitions extends Component {
  renderUserRecognitions = (recognitions) => {
    const filteredRecogs = recognitions.filter(recognition => recognition.attributes.receiver.id === this.props.currentUser.id)
    return filteredRecogs.map(recog => {
      return (
        <div className="recogs" key={recog.id}>
          <p>{recog}</p>
        </div>
      )
    })
  }

  render() {
    return (
      <div className="user-recognition-container">
        {}
      </div>
    )
  }

}

const mapStateToProps = ({currentUser}) => {
  return {
    currentUser: currentUser
  }
}

// export default UserRecognitions
export default connect (mapStateToProps, {getRecognitions})(UserRecognitions)
