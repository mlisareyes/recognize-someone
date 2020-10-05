// export const createRecognition = (payload) => {
//   return (dispatch) => {
//     return fetch("http://localhost:3000/recognitions", {
//       method: "POST",
//       credentials: "include",
//       headers: {
//         "Accept": "application/json",
//         "Content-Type": "application/json"
//       },
//       body: JSON.stringify({recognition: payload})
//     })
//     .then(response => response.json())
//     // .then(response => console.log("recog response", response))
//     .then(data => dispatch({type: 'CREATE_RECOGNITION', recognition: data}))
//   }
// }

export const createRecognition = (newRecognition) => {
  return (dispatch) => {
    return fetch("http://localhost:3000/recognitions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        recognition: {
          receiver_id: newRecognition.receiver_id,
          content: newRecognition.content,
          author_id: newRecognition.author_id
        }
      })
    })
    .then(response => response.json())
    // .then(response => console.log("recog response", response))
    .then(Recognitiondata => dispatch({type: 'CREATE_RECOGNITION', recognition: Recognitiondata}))
  }
}
