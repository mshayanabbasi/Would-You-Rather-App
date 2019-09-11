import { combineReducers } from 'redux'
import loading_reducer from './loading_reducer'
import login_reducer from './login_reducer'
import question_reducer from './question_reducer'
import user_reducer from './user_reducer'


const rootReducer = combineReducers({
    loading: loading_reducer,
    authedUser: login_reducer,
    questions: question_reducer,
    users: user_reducer
})

export default rootReducer