export const createRecognition = (payload) => {
  return (dispatch) => {
    return fetch("http://localhost:3000/recognitions", {
      method: "POST",
      credentials: "include",
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({recognition: payload})
      // body: JSON.stringify({
      //   recognition: {
      //     content: newRecognition.recognition,
      //     user_id: author_id
      //   }
      // })
    })
    .then(response => response.json())
    // .then(response => console.log("recog response", response))
    .then(data => dispatch({type: 'CREATE_RECOGNITION', recognition: data}))
  }
}
