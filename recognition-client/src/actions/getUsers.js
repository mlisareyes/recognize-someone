export const getUsers = () => async(dispatch) => {
  const res = await fetch('http://localhost:3000/users')
  .then(res => res.json())
  dispatch({type: 'GET_USERS', users: res.data})
}
