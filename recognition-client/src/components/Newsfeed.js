import React from 'react'
// import Content from './Content'
import { connect } from 'react-redux';


// const Recognitions = (props) => {
//   return (
//     <div>
//       {props.recognitions.map(recognition =>
//       <li key={recognition.id}>
//       {recognition.content}</li>)}
//     </div>
//   )
// }

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

const renderRecognitions = (props) => {
  return props.recognitions.map((recognition, index) => {
    return (
      <div key={index} className="all-recognitions">
        <h3>{recognition.attributes.receiver.first_name + " " + recognition.attributes.receiver.last_name} Recognized For:</h3>
        <p>{recognition.attributes.content}</p>
        <p>Written By: {recognition.attributes.author.first_name + " " + recognition.attributes.author.last_name}</p>
      </div>
    )
  })
}

const Newsfeed = props => {
  return (
    <div className="recognition-container">
      {renderRecognitions(props)}
    </div>
  )
}
// const Newsfeed = ({ recognitions }) => {
//   return (
//     <div>
//       {renderRecognitions(recognitions)}
//     </div>
//   )
// }
// export default Newsfeed
//
const mapStateToProps = ({ recognitions }) => {
  return{
    recognitions
  }
}

export default connect(mapStateToProps)(Newsfeed)
