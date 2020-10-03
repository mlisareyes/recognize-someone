import React from 'react'

const renderRecognitions = (recognitions) => {
  const sortedRecognitions = recognitions.sort((a, b) => b.id - a.id)
  return sortedRecognitions.map(recognition => {
    return (
      <div className="recognition-card" key={recognition.id}>
        <p>{recognition.content}</p>
      </div>
    )
  })
}

const Newsfeed = ({ recognitions }) => {
  return (
    <div className="recognition-container">
      {renderRecognitions(recognitions)}
    </div>
  )
}

export default Newsfeed


//need to import recognitions (Create action to fetch recognitions)
//need to import recognitions form
//Who do you want to recognize?
//Who recognized you?

// import RecognitionForm from '../components/RecognitionForm'
// import Recognition from '../components/Recognition'
// import {getRecognitions} from '../actions/getRecognitions'
// import {connect} from 'react-redux'
// import {currentUser} from '../actions/currentUser'
// import { useHistory } from 'react-router-dom'

// class Newsfeed extends Component {
//
// // componentDidMount() {
// //   this.props.currentUser()
// // }
//
//   render() {
//     return (
//       <div>
//         Welcome!
//         <RecognitionForm />
//         <Recognition />
//       </div>
//     )
//   }
// }
//
// export default Newsfeed
