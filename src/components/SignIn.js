import React from 'react';
import Card from '@material-ui/core/Card'
import styles from './styles/SignIn'
const SignIn = (props) => {
    const { classes, users, authedUser, login } = props
    return(
        <div className={classes.centerScreen}>
            <Card className={classes.card}>
                
            </Card>
        </div>
    ) 
}

export default SignIn