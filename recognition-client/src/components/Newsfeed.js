import React, { Component } from 'react'
// import Content from './Content'
// import { connect } from 'react-redux';


class Newsfeed extends Component {

  renderRecognitions = (recognitions) => {
    return recognitions.map((recognition, index) => {
      return (
        <div key={index} className="all-recognitions">
          <h3>{recognition.attributes.receiver.first_name + " " + recognition.attributes.receiver.last_name} Recognized For:</h3>
          <p>{recognition.attributes.content}</p>
          <p>Written By: {recognition.attributes.author.first_name + " " + recognition.attributes.author.last_name}</p>
        </div>
      )
    })
  }

  render() {
    return (

      <div className="recognition-container">
        {this.renderRecognitions(this.props.recognitions)}
      </div>
    )
  }
}

export default Newsfeed


//
// const renderRecognitions = (recognitions) => {
//   // const sortedRecognitions = recognitions.sort((a, b) => b.id - a.id)
//   return recognitions.map(recognition => {
//     return (
//       // <div className="recognition-card" key={recognition.id}>
//       <div></div>
//         <p>{recognitions.content}</p>
//
//       </div>
//     )
//   })
// }
