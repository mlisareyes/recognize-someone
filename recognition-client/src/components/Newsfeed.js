import React from 'react'
// import Content from './Content'
import { connect } from 'react-redux';


const renderRecognitions = (recognitions) => {
  // const sortedRecognitions = recognitions.sort((a, b) => b.id - a.id)
  return recognitions.map(recognition => {
    return (
      <div className="recognition-card">
        <h3>{recognition.attributes.receiver.first_name + " " + recognition.attributes.receiver.last_name} Recognized For:</h3>
        <p>{recognition.attributes.content}</p>
        <p>Written By: {recognition.attributes.author.first_name + " " + recognition.attributes.author.last_name}</p>
      </div>
    )
  })
}

const Newsfeed = ({ recognitions }) => {
  return (
    <div>
      {renderRecognitions(recognitions)}
    </div>
  )
}

const mapStateToProps = ({ recognitions }) => {
  return{
    recognitions
  }
}

export default connect(mapStateToProps)(Newsfeed)
