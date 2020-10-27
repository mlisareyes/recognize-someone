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
