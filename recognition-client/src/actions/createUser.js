// export const createUser = (payload) => {
//   return (dispatch) => {
//     fetch("http://localhost:3000/users", {
//       method: "POST",
//       credentials: "include",
//       headers: {
//         "Accept": "application/json",
//         "Content-Type": "application/json"
//       },
//       body: JSON.stringify({user: payload})
//     })
//     .then(response => response.json())
//     // .then(response => console.log("signup response", response))
//     .then(data => dispatch({type: 'CREATE_USER', user: data}))
//   }
// }
export const createUser = (payload, callback) => async(dispatch) => {
  const response = await fetch("http://localhost:3000/users", {
    method: "POST",
    credentials: "include",
    headers: {
      "Accept": "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ user: payload })
  })
  .then(response => response.json())
  if (response.error) {
    alert(response.error)
  }
  dispatch({type: 'CREATE_USER', payload: response})
  callback()
}
