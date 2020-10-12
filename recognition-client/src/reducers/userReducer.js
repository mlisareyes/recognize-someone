const userReducer = (state = [], action) => {
  switch(action.type) {
    case 'CREATE_USER':
      return {user: action.user}
    case 'LOGIN_USER':
      return {user: action.user}
    case 'GET_USERS':
      return action.users
    case 'LOGOUT_USER':
       return {}

    default:
      return state;
  }
}

export default userReducer
