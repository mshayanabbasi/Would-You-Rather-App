import { combineReducers } from 'redux'
import authedUser from './authedUsers'
import questions from "./questions";
import users from './users'
import { loadingBarReducer } from 'react-redux-loading'

const rootReducers = combineReducers({
    authedUser,
    questions,
    users,
    loading: loadingBarReducer
})

export default rootReducers