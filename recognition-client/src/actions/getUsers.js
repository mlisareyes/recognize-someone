export const getUsers = () => {
  return (dispatch) => {
    return fetch("http://localhost:3000/users")
    .then(res => res.json())
    .then(users => dispatch({ type: "GET_USERS", payload: users.data}))
  };
};
