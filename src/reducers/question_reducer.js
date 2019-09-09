import { INITIAL_DATA, SAVE_QUESTION, SAVE_QUESTION_ANSWER, GET_QUESTIONS } from '../actions/actionCreators'


const question_reducer = ( state = {}, action ) => {
    switch (action.type) {
        case GET_QUESTIONS:
            return action.questions
        case SAVE_QUESTION:
            return {
                ...state,
                [action.question.id]: action.question
            }
        case SAVE_QUESTION_ANSWER:
            return {
                ...state,
                [action.qid]: {
                    ...state[action.qid],
                    [action.answer]: {
                        ...state[action.qid][action.answer],
                        votes: [...state[action.qid][action.answer].votes, action.authedUser]
                    }
                }
            }
        case INITIAL_DATA:
            return action.questions
        default:
            return state
    }
}

export default question_reducer