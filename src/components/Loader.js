import React from 'react';
import styles from './styles/Loader'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import CircularProgress from '@material-ui/core/CircularProgress'

const Loader = (props) => {
    const { classes } = props
    return (
        <div className={classes.centerScreen}>
            <CircularProgress className={classes.loader}/>
        </div>
    )
}

Loader.propTypes = {
    classes: PropTypes.object.isRequired
}

export default withStyles(styles)(Loader)