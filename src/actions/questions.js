import { saveQuestion, saveQuestionAnswer } from '../utils/api'

const ADD_QUESTION = 'ADD_QUESTION'
const RECEIVE_QUESTION = 'RECEIVE_QUESTION'
const ANSWER_QUESTION = 'ANSWER_QUESTION'

const receiveQuestions = (questions) => {
    return {
        type: RECEIVE_QUESTION,
        questions
    }
}

const addQuestion = (question) => {
    return {
        type: ADD_QUESTION,
        question
    }
}

const answerQuestion = ({ authedUser, qid, answer }) => {
    return {
        type: ANSWER_QUESTION,
        authedUser,
        qid,
        answer
    }
}

const handleAddQuestion = (optionOneText, optionTwoText) => {
    return (dispatch, getState) => {
        const { authedUser } = getState()
        
    }
}
