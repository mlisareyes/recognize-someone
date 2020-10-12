// export const getUsers = () => {
//   return (dispatch) => {
//     return fetch("http://localhost:3000/users")
//     .then(res => res.json())
//     .then(allUsers => dispatch({ type: "GET_USERS", payload: allUsers.data}))
//   };
// };

export const getUsers = () => async(dispatch) => {
  const res = await fetch('http://localhost:3000/users')
  .then(res => res.json())
  dispatch({type: 'GET_USERS', users: res.data})
}
