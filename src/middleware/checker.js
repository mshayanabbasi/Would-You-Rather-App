import { QUESTION_ANSWER } from '../actions/questions'
const checker = (store) => (next) => (action) => {
    if (action.type === QUESTION_ANSWER) {
        const users = store.getState().users
        const answers = Object.keys(users[action.authedUser].answers)
        if (answers.indexOf(action.qid) > -1) {
            return alert('You can only answer a question once.')
        }
    }
    return next(action)
}   
export default checker