import { combineReducers } from 'redux'
import userReducer from './userReducer'
import recognitionReducer from './recognitionReducer'

const rootReducer = combineReducers({
    user: userReducer,
    recognitions: recognitionReducer
})

export default rootReducer
