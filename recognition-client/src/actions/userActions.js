export const loginUser = (user) => {
  return(dispatch) => {
    fetch("http://localhost:3000/login", {
      method: 'POST',
      headers: {
        "Content-Type":"application/json",
      },
      credentials: 'include',
      body: JSON.stringify(user)
    })
    .then(response => response.json())
    .then(data => dispatch({type: "LOGIN_USER", user: data }))
  }
}
