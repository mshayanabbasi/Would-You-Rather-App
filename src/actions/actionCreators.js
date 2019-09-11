export const SAVE_QUESTION = 'SAVE_QUESTION'
export const SAVE_QUESTION_ANSWER = 'SAVE_QUESTION_ANSWER'
export const GET_USERS = 'GET_USERS'
export const INITIAL_DATA = 'INITIAL_DATA'
export const GET_QUESTIONS = 'GET_QUESTIONS'
export const LOGIN_USER = 'LOGIN_USER'
export const LOGOUT_USER = 'LOGOUT_USER'


export const initialDataActionCreator = (users, questions) => ({
    type: INITIAL_DATA,
    users,
    questions
})

export const authedUserActionCreator = (authedUser) => ({
    type: LOGIN_USER,
    authedUser
})

export const userLogoutActionCreator = () => ({
    type: LOGOUT_USER
})

export const getUserActionCreator = (users) => ({
    type: GET_USERS,
    users
})

export const getQuestionActionCreator = (questions) => ({
    type: GET_QUESTIONS,
    questions
})

export const saveQuestionActionCreator = (question) => ({
    type: SAVE_QUESTION,
    question
})

export const saveQuestionAnswerActionCreator = (authedUser, qid, answer) => ({
    type: SAVE_QUESTION_ANSWER,
    authedUser,
    qid,
    answer
})
