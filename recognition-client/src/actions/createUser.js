export const createUser = (payload) => {
  return (dispatch) => {
    fetch("http://localhost:3000/users", {
      method: "POST",
      credentials: "include",
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({user: payload})
    })
    .then(response => response.json())
    // .then(response => console.log("signup response", response))
    .then(data => dispatch({type: 'CREATE_USER', user: data}))
  }
}
