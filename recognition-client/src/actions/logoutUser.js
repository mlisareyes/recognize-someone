export const logoutUser = (user) => {
  return(dispatch) => {
    fetch("http://localhost:3000/logout", {
      method: 'DELETE',
      credentials: 'include'
    })
    .then(response => response.json())
    .then(data => dispatch({type: "LOGOUT_USER"}))
  }
}
