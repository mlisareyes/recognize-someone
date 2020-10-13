export const createRecognition = (newRecognition) => {
  return (dispatch) => {
    return fetch("http://localhost:3000/recognitions", {
      method: "POST",
      credentials: "include",
      headers: {
        // "Accept": "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({recognition: newRecognition})
    })
    .then(response => response.json())
    // .then(response => console.log("recog response", response))
    .then(data => dispatch({type: 'CREATE_RECOGNITION', recognition: data.data}))
  }
}
