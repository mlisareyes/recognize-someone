import { combineReducers } from 'redux'
import userReducer from './userReducer'
import recognitionReducer from './recognitionReducer'
import currentUserReducer from './currentUserReducer'

const rootReducer = combineReducers({
    user: userReducer,
    currentUser: currentUserReducer,
    recognitions: recognitionReducer
})

export default rootReducer
