import React from 'react'
import { withRouter, Redirect } from 'react-router-dom'
import { dispatch_userLoggedOutAction } from '../actions/actionDispatchers'
import { connect } from 'react-redux'
const SignOut = (props) => {
    props.signout()
    
    return (
        <Redirect from='/' to='/'/>
    )
}

const mapDispatchToProps = (dispatch) => ({
    signout: () => dispatch(dispatch_userLoggedOutAction())
})

export default withRouter(connect(null, mapDispatchToProps)(SignOut))

