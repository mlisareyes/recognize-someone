const recognitionsReducer = (state = {}, action) => {
  switch(action.type) {
    case 'CREATE_RECOGNITION':
      return {recognition: action.recognition}
    case 'GET_RECOGNITIONS':
      return {recognition: action.recognition}

    default:
      return state;
  }
}

export default recognitionReducer
