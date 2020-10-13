const currentUserReducer = (state = {}, action) => {
  switch(action.type) {
    case 'CURRENT_USER':
      return action.users
    case 'CREATE_USER':
      return {user: action.user}
    case 'LOGIN_USER':
      return {user: action.user}
    case 'LOGOUT_USER':
      return {}

    default:
      return state;
  }
}

export default currentUserReducer
