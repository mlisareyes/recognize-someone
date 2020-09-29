// export const loginUser = (payload, callback) => {
//   return(dispatch) => {
//     fetch("http://localhost:3000/login", {
//       method: 'POST',
//       credentials: 'include',
//       headers: {
//         "Accept":"application/json",
//         "Content-Type":"application/json"
//       },
//       body: JSON.stringify({user: payload})
//     })
//     .then(response => response.json())
//     .then(userData => dispatch({type: "LOGIN_USER", user: userData}))
//   }
//   callback()
// }

export const loginUser = (payload, callback) => async(dispatch) => {
  const userData = await fetch("http://localhost:3000/login", {
    method: "POST",
    credentials: "include",
    headers: {
      "Accept": "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ user: payload })
  })
  .then(response => response.json())
  if (userData.error) {
    alert(userData.error)
  }
  dispatch({type: 'LOGIN_USER', payload: userData})
  callback()
}
