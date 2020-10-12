const recognitionReducer = (state = [], action) => {
  const newState = [...state];

    if(action.type === 'CREATE_RECOGNITION'){
      newState.unshift(action.recognition)
    }

    if(action.type === 'GET_RECOGNITIONS'){
      action.rec.forEach(recognition => {
        newState.push(recognition)
      });
      // console.log(action.rec)
    }
  return newState
}

export default recognitionReducer



// switch(action.type) {
  //   case 'GET_RECOGNITIONS':
  //     return action.payload
  //   case 'CREATE_RECOGNITION':
  //     return {recognition: action.recognition}
  //   default:
  //     return state;
  // }
