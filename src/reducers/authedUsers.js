import { SET_AUTHED_USER, CLEAR_AUTHED_USER } from '../actions/authedUser'

const authedUser = (state=null, action) => {
    switch(action.type) {
        case SET_AUTHED_USER:
            console.log('action.id', action.id)
            return action.id
        case CLEAR_AUTHED_USER:
            return null
        default:
            return state
    }
}

export default authedUser