const recognitionReducer = (state = [], action) => {
  switch(action.type) {
    case 'GET_RECOGNITIONS':
    // return {recognition: action.recognition}
    return action.payload
    case 'CREATE_RECOGNITION':
      // return {recognition: action.recognition}
      // return action.payload
      return action.Recognitiondata
    default:
      return state;
  }
}

export default recognitionReducer
