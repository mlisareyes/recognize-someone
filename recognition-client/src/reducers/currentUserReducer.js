const currentUserReducer = (state = {}, action) => {
  switch(action.type) {
    case 'CURRENT_USER':
      return action.currentUser
    case 'CREATE_USER':
      return {user: action.payload}
    case 'LOGIN_USER':
      return {user: action.payload}
    case 'LOGOUT_USER':
      return {}

    default:
      return state;
  }
}

export default currentUserReducer
