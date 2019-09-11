import React, { Component } from 'react';
import PropTypes from 'prop-types'
import AppBar from '@material-ui/core/AppBar'
import { withStyles } from '@material-ui/core/styles'
import Tabs from '@material-ui/core/Tabs'
import NoSsr from '@material-ui/core/NoSsr'
import Tab from '@material-ui/core/Tab'
import QuestionStatus from './QuestionStatus'
import styles from './styles/QuestionList'
import { connect } from 'react-redux'


const LinkTab = (props) => {
    return <Tab component="a" onClick={event => event.preventDefault()} {...props}/>
}

class QuestionList extends Component {
    state = { 
        value: 0,
     }
     handleChange = (event, value) => {
         this.setState({
            value
         })
     }
    render() {
        const { classes, unAnsweredQuestion, answeredQuestion } = this.props
        const { value } = this.state
        return ( 
            <NoSsr>
                <div className={classes.root}>
                    <AppBar position="static">
                        <Tabs
                            classes={{
                                indicator: classes.underline,
                                root: classes.tabColor
                            }}
                            variant="fullWidth"
                            value={value}
                            onChange={this.handleChange}
                        >
                            <LinkTab label="Unanswered Question" href="UnansweredQuestion" />
                            <LinkTab label="Answered Question" href="AnsweredQuestion" />
                        </Tabs>
                    </AppBar>
                    {value === 0 && <QuestionStatus questions={unAnsweredQuestion} type="unAnswered" />}
                    {value === 1 && <QuestionStatus questions={answeredQuestion} type="answered" />}
                </div>
            </NoSsr>
         );
    }
}

QuestionList.propTypes = {
    classes: PropTypes.object.isRequired,
    unAnsweredQuestion: PropTypes.array.isRequired,
    answeredQuestion: PropTypes.array.isRequired,
    authedUser: PropTypes.string.isRequired
}


QuestionList = withStyles(styles)(QuestionList)

const mapStateToProps = (state) => ({
    authedUser: state.authedUser,
    unAnsweredQuestion: Object.values(state.questions).filter(q => 
        !state.users[state.authedUser].answers.hasOwnProperty(q.id)
    ).sort((a, b) => b.timestamp - a.timestamp),
    answeredQuestion: Object.values(state.questions).filter(q => 
        !state.users[state.authedUser].answers.hasOwnProperty(q.id)
        ).sort((a, b) => b.timestamp - a.timestamp)
})

export default connect(mapStateToProps)(QuestionList);