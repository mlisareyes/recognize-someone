import { combineReducers } from 'redux'
import userReducer from './userReducer'
import recognitionReducer from './recognitionReducer'
import currentUserReducer from './currentUserReducer'

const rootReducer = combineReducers({
    users: userReducer,
    currentUser: currentUserReducer,
    recognitions: recognitionReducer
})

export default rootReducer
