import React from 'react';
import Typography from '@material-ui/core/Typography'
import { withStyles } from '@material-ui/core/styles'
import styles from './styles/ErrorPage'
import PropTypes from 'prop-types'
import { withRouter } from 'react-router-dom'

const ErrorPage = (props) => {
    const { classes } = props
    return (
        <div className={classes.centerScreen}>
            <Typography 
                variant="h2"
                className={classes.text}
            >
                404 Error: Page Not Found
            </Typography>
        </div>
    )
}

ErrorPage.propTypes = {
    classes: PropTypes.object.isRequired
}

export default withRouter(withStyles(styles)(ErrorPage))