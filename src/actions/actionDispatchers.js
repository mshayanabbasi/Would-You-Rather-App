import * as API from '../utils/_DATA'
import {
    initialDataActionCreator,
    saveQuestionActionCreator,
    saveQuestionAnswerActionCreator,
    getQuestionActionCreator,
    getUserActionCreator,
    authedUserActionCreator,
    userLogoutActionCreator,
} from './actionCreators'

const dispatch_authedUserAction = (authedUser) => authedUserActionCreator(authedUser)

const dispatch_userLoggedOutAction = () => userLogoutActionCreator()

const dispatch_initialActionData = () => 
    dispatch => 
        Promise.all([API._getUsers(), API._getQuestions()])
            .then(([users, questions]) =>
                dispatch(initialDataActionCreator(users, questions)))

const dispatch_getUserAction = () => 
    dispatch => 
        API._getUsers()
            .then((users) => 
                dispatch(getUserActionCreator(users)))

const dispatch_getQuestionAction = () => 
    dispatch => 
        API._getQuestions()
            .then((questions) => 
                dispatch(getQuestionActionCreator(questions)))

const dispatch_saveQuestionAction = (question) => { 
    return dispatch => 
        API._saveQuestion(question)
            .then((question) => {
                dispatch(saveQuestionActionCreator(question))
                console.log("Question Saved!");
            }) 
}

const dispatch_saveQuestionAnswerAction = (authedUser, qid, answer) => {
    return dispatch => 
        API._saveQuestionAnswer({ authedUser, qid, answer })
            .then(() => {
                dispatch(saveQuestionAnswerActionCreator(authedUser, qid, answer))
            })
}

export {
    dispatch_authedUserAction,
    dispatch_userLoggedOutAction,
    dispatch_initialActionData,
    dispatch_getUserAction,
    dispatch_getQuestionAction,
    dispatch_saveQuestionAction,
    dispatch_saveQuestionAnswerAction
}