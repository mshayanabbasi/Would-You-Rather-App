import { RECEIVE_QUESTION, ADD_QUESTION, QUESTION_ANSWER } from '../actions/questions'


const questions = (state={}, action) => {
    switch (action.type) {
        case RECEIVE_QUESTION:
            return {
                ...state,
                ...action.questions
            }
        case ADD_QUESTION:
            const { question } = action
            return {
                ...state,
                [question.id]: question,
            }   
        case QUESTION_ANSWER:
            return{
                ...state,
                [action.qid]: {
                    ...state[action.qid],
                    [action.answer]: {
                        ...state[action.qid][action.answer],
                        votes: state[action.qid][action.answer].votes.concat([action.authedUser])
                    },
                },
            }
        default:
            return state
    }
}


export default questions