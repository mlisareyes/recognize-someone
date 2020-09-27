export const currentUser = () => {
  return(dispatch) => {
    fetch("http://localhost:3000/currentuser", {
      credentials: 'include',
      headers: {
        "Content-Type":"application/json"
      }
    })
    .then(response => response.json())
    .then(data => dispatch({type: "CURRENT_USER", user: data}))
  }
}
