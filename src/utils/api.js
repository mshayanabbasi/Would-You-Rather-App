import { _getUsers, _getQuestions, _saveQuestion, _saveQuestionAnswer } from "./_DATA";

function getInitialData() {
    return Promise.all([
        _getUsers(),
        _getQuestions(),
    ]).then(([users, questions]) => ({
        users,
        questions,
    }))
}

function saveQuestion(info) {
    return _saveQuestion(info)
}

function saveQuestionAnswer(info) {
    return _saveQuestionAnswer
}

export {
    getInitialData,
    saveQuestion,
    saveQuestionAnswer
}