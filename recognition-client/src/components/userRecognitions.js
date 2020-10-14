import React, { Component } from 'react'
import {connect} from 'react-redux';
import {getRecognitions} from '../actions/getRecognitions'


class UserRecognitions extends Component {

  renderUserRecognitions = (recognitions) => {
    return (
      <div>
        {recognitions.filter(recognition => recognition.attributes.receiver.id === this.props.currentUser.id).map(filteredRecognition => (
          <li>
            {filteredRecognition}
          </li>
        ))}
      </div>
    )
  }

  render() {
    return (
      <div className="recognition-container">
        {this.renderUserRecognitions(this.props.recognitions)}
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
// import React, { Component } from 'react'

// class UserRecognitions extends Component {
//
// }
// import React from 'react'
//
// const UserRecognitions = ({ recognitions, currentUser }) => {
//   const userRecogs = recognitions.filter(recognition => {
//     return recognition.attributes.receiver.id === currentUser.id
//   })
//   const recogCards = userRecogs.length > 0 ?
//     userRecogs.map((recognition, index) => {
//       return (
//         <div key={index} className="all-recognitions">
//           <p>{recognition.attributes.content}</p>
//           </div>
//       )}): <p>This is myRecognitions</p>
//   return (
//     recogCards
//   )
// }

// export default UserRecognitions
