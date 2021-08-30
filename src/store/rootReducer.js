import {combineReducers} from 'redux'
import {loginReducer} from './login'
import {usersReducer} from './users'

const rootReducer = combineReducers({
    login: loginReducer,
    users: usersReducer
})

export default rootReducer