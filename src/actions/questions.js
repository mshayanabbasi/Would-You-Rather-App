import { saveQuestion, saveQuestionAnswer } from '../utils/api'
import { showLoading, hideLoading } from 'react-redux-loading'
const ADD_QUESTION = 'ADD_QUESTION'
const RECEIVE_QUESTION = 'RECEIVE_QUESTION'
const QUESTION_ANSWER = 'QUESTION_ANSWER'

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

const questionAnswer = ({ authedUser, qid, answer }) => {
    return {
        type: QUESTION_ANSWER,
        authedUser,
        qid,
        answer
    }
}

const handleAddQuestion = (optionOneText, optionTwoText) => {
    return (dispatch, getState) => {
        const { authedUser } = getState()
        dispatch(showLoading())
        return saveQuestion({
            optionOneText,
            optionTwoText,
            author: authedUser,
        })
        .then((question) => dispatch(addQuestion(question)))
        .then(() => dispatch(hideLoading()))
    }
}

const handleQuestionAnswer = (question, answer) => {
    return (dispatch, getState) => {
        const { authedUser } = getState()
        dispatch(showLoading())
        return saveQuestionAnswer({
            question,
            answer,
            author: authedUser
        })
        .then(() => dispatch(questionAnswer(authedUser, question, answer)))
    }
}

export {
    ADD_QUESTION,
    QUESTION_ANSWER,
    RECEIVE_QUESTION,
    handleAddQuestion,
    handleQuestionAnswer,
}