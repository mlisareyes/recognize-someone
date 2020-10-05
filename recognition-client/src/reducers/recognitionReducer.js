const recognitionReducer = (state = [], action) => {
  switch(action.type) {
    case 'CREATE_RECOGNITION':
      // return {recognition: action.recognition}
      return action.recognition
    case 'GET_RECOGNITIONS':
      // return {recognition: action.recognition}
      return action.payload
    default:
      return state;
  }
}

export default recognitionReducer
