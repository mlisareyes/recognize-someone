export const deleteRecognition = (id) => {
  return(dispatch) => {
    fetch(`http://localhost:3000/recognitions/${id}`, {
      method: 'DELETE',
      credentials: 'include'
    })
    .then(data => dispatch({type: "DELETE_RECOGNITION", id}))
  }
}
