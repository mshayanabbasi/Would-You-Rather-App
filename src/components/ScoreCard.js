import React from 'react';
import Typography from '@material-ui/core/Typography'
import { withStyles } from '@material-ui/core/styles'
import styles from './styles/ScoreCard'
import Divider from '@material-ui/core/Divider'
import PropTypes from 'prop-types'

const ScoreCard = (props) => {
    const { classes, name, questionAsked, answered } = props

    return (
        <div className={classes.root}>
            <h1 className={classes.h1}>{name}</h1>
            <Divider className={classes.divider} />
            <div className={classes.body}>
                <Typography variant="h6" component="p" className={classes.answered}>
                    {`Answered Question: ${answered}`}
                </Typography>
                <Divider />
                <Typography variant="h6" component="p" className={classes.questionAsked}>   
                    {`Created Question: ${questionAsked}`}
                </Typography>
            </div>
        </div>
    )
}

ScoreCard.propTypes = {
    classes: PropTypes.object.isRequired,
    name: PropTypes.string.isRequired,
    questionAsked: PropTypes.number.isRequired,
    answered: PropTypes.number.isRequired
}

export default withStyles(styles)(ScoreCard)