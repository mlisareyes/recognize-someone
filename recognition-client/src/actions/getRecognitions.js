export const getRecognitions = () => async(dispatch) => {
  const res = await fetch('http://localhost:3000/recognitions')
  .then(res => res.json())
  dispatch({type: 'GET_RECOGNITIONS', rec: res.data})
}
