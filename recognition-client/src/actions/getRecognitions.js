// export const getRecognitions = () => {
//   return (dispatch) => {
//     return fetch("http://localhost:3000/recognitions")
//     .then(response => response.json())
//     .then(data => dispatch({type: 'GET_RECOGNITIONS', recognition: data}))
//   }
// }

// export const getRecognitions = () => {
//   return (dispatch) => {
//     return fetch("http://localhost:3000/recognitions")
//     .then(res => res.json())
//     .then(recognitions => dispatch({ type: "GET_RECOGNITIONS", recognitions: recognitions.data}))
//   };
// };

export const getRecognitions = () => async(dispatch) => {
  const res = await fetch('http://localhost:3000/recognitions')
  .then(res => res.json())
  dispatch({type: 'GET_RECOGNITIONS', rec: res.data})
}
