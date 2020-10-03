export const getRecognitions = () => {
  return (dispatch) => {
    return fetch("http://localhost:3000/recognitions")
    .then(response => response.json())
    .then(data => dispatch({type: 'GET_RECOGNITIONS', recognition: data}))
  }
}
