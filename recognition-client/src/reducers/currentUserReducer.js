const currentUserReducer = (state = {}, action) => {
  switch(action.type) {
    case 'CURRENT_USER':
      return action.users
    default:
      return state;
  }
}

export default currentUserReducer
