import { RECEIVE_USERS } from '../actions/users'
import { ADD_QUESTION, QUESTION_ANSWER } from '../actions/questions'
const users = (state={}, action) => {
    switch(action.type) {
        case RECEIVE_USERS: 
            return {
                ...state,
                ...action.users
            }
        case ADD_QUESTION:
            return {
                ...state,
                [action.question.author]: {
                    ...state[action.question.author],
                    questions: state[action.question.author].questions.concat([action.question.id])
                }
            }
        case QUESTION_ANSWER:
            return {
                ...state,
                [action.authedUser]: {
                    ...state[action.authedUser],
                    answers: {
                        ...state[action.authedUser].answers,
                        [action.qid]: action.answer,
                    },
                },
            }
        default:
            return state
    }
}
export default users