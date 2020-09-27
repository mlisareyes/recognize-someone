export const loginUser = (user, callback) => {
  return(dispatch) => {
    fetch("http://localhost:3000/login", {
      method: 'POST',
      credentials: 'include',
      headers: {
        "Content-Type":"application/json"
      },
      body: JSON.stringify({user: user})
    })
    .then(response => response.json())
    .then(userData => dispatch({type: "LOGIN_USER", user: userData}))
  }
}
