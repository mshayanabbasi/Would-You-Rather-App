const SAVE_QUESTION = 'SAVE_QUESTION'
const SAVE_QUESTION_ANSWER = 'SAVE_QUESTION_ANSWER'
const GET_USERS = 'GET_USERS'
const INITIAL_DATA = 'INITIAL_DATA'
const GET_QUESTIONS = 'GET_QUESTIONS'
const LOGIN_USER = 'LOGIN_USER'
const LOGOUT_USER = 'LOGOUT_USER'


const initialDataActionCreator = (users, questions) => ({
    type: INITIAL_DATA,
    users,
    questions
})

const authedUserActionCreator = (authedUser) => ({
    type: LOGIN_USER,
    authedUser
})

const userLogoutActionCreator = () => ({
    type: LOGOUT_USER
})

const saveQuestionActionCreator = (question) => ({
    type: SAVE_QUESTION,
    question
})

const getUserActionCreator = (users) => ({
    type: GET_USERS,
    users
})

const getQuestionActionCreator = (questions) => ({
    type: GET_QUESTIONS,
    questions
})
const saveQuestionAnswerActionCreator = (authedUser, qid, answer) => ({
    type: SAVE_QUESTION_ANSWER,
    authedUser,
    qid,
    answer
})
export {
    SAVE_QUESTION,
    SAVE_QUESTION_ANSWER,
    INITIAL_DATA,
    GET_QUESTIONS,
    GET_USERS,
    LOGIN_USER,
    LOGOUT_USER,
    saveQuestionActionCreator,
    saveQuestionAnswerActionCreator,
    getQuestionActionCreator,
    getUserActionCreator,
    userLogoutActionCreator,
    initialDataActionCreator,
    authedUserActionCreator
}