import React from 'react';
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import Divider from '@material-ui/core/Divider'
import styles from './styles/ScoreBadge'

const ScoreBadge = (props) => {
    const { totalScore, classes } = props

    return (
        <div className={classes.main}>
            <h4 style={{ margin: 0 }}>SCORE</h4>
            <Divider width='100%' />
            <div className={classes.score}>
                {totalScore}
            </div>
        </div>
    )
}

ScoreBadge.propTypes = {
    classes: PropTypes.object.isRequired,
    totalScore: PropTypes.number.isRequired
}

export default withStyles(styles)(ScoreBadge)