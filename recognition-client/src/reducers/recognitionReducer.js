const recognitionReducer = (state = [], action) => {
  let newState = [...state];
    if(action.type === 'CREATE_RECOGNITION'){
      newState.unshift(action.recognition)
    }
    if(action.type === 'GET_RECOGNITIONS'){
      newState = action.rec
    }
    if(action.type === 'DELETE_RECOGNITION'){
      newState = newState.filter(recog => recog.id !== action.id)
    }
  return newState
}

export default recognitionReducer
