import React from 'react'
import Content from './Content'
import { connect } from 'react-redux';


const renderRecognitions = (recognitions) => {
  const sortedRecognitions = recognitions.sort((a, b) => b.id - a.id)
  return recognitions.map(recognition => {
    return (
      <div>
        <Content content={recognition.attributes.content} />
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
