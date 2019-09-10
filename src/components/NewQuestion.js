import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles'
import PropTypes from 'prop-types'
import Typography from '@material-ui/core/Typography'
import InputLabel from '@material-ui/core/InputLabel'
import FormControl from '@material-ui/core/FormControl'
import Button from '@material-ui/core/Button'
import styles from './styles/NewQuestion'
import Input from '@material-ui/core/Input'
import { withRouter, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { dispatch_saveQuestionAction } from '../actions/actionDispatchers'

class NewQuestion extends Component {
    state = { 
        optionOneText: '',
        optionTwoText: '',
        submited: false,
        buttonDisabled: false
     }
    handleChangeOne = (event) => {
        this.setState({
            optionOneText: event.target.value
        })
    }
    handleChangeTwo = (event) => {
        this.setState({
            optionTwoText: event.target.value
        })
    }
    handleSubmit = () => {
        const { author } = this.props
        let { optionOneText, optionTwoText } = this.state
        optionOneText = optionOneText.trim()
        optionTwoText = optionTwoText.trim()
        if (optionOneText && optionTwoText) {
            if (optionOneText !== optionTwoText) {
                this.setState({
                    buttonDisabled: true
                })
                this.props.saveQuestion({ optionOneText, optionTwoText, author })
                    .then(() => this.setState({
                        submited: true
                    }))
            }
            else {
                alert("Option One and Option Two cannot be same")
            }
        }
        else {
            alert("Option One and Option Two cannot be submitted empty")
        }
    }
    render() { 
        const { classes } = this.props
        const { submited } = this.state
        return ( 
            submited ? 
            <Redirect 
                to={{
                    pathname: '/',
                    state: {referrer: '/add'}
                }}
            />
            : (<div className={classes.centerScreen}>
                <div style={{ background: '#008080' }}>
                    <Typography variant="h6" component="h5" className={classes.header}>
                        Complete the question
                    </Typography>
                </div>
                <Typography variant="h5" component="h5" className={classes.subHead}>
                    Would you rather ...
                </Typography>
                <FormControl className={classes.margin}>
                    <InputLabel 
                        htmlFor="custom-css-standard-input"
                        classes={{
                            root: classes.cssLabel,
                            focused: classes.cssFocused,
                        }}
                    >
                        Option One
                    </InputLabel>
                    <Input 
                        id="custom-css-standard-input"
                        classes={{
                            underline: classes.underline
                        }}
                        onChange={this.handleChangeOne}
                        value={this.state.optionOneText}
                    />
                </FormControl>
                <Typography variant="h5" component="h5" className={classes.textField}>
                    ----------- OR ------------
                </Typography>
                <FormControl className={classes.margin}>
                    <InputLabel 
                        htmlFor="optionOne-input"
                        classes={{
                            root: classes.cssLabel,
                            focused: classes.cssFocused
                        }}
                    >
                        Option Two
                    </InputLabel>
                    <Input 
                        id="optionTwo-input"
                        classes={{
                            underline: classes.underline
                        }}
                        onChange={this.handleChangeTwo}
                        value={this.state.optionTwoText}
                    />
                </FormControl>
                <Button
                    variant="contained"
                    className={classes.button}
                    onClick={this.handleSubmit}
                    disabled={this.state.buttonDisabled}
                >
                    Submit
                </Button>
            </div>
            )
         );
    }
}
 
NewQuestion.propTypes = {
    classes: PropTypes.object.isRequired,
    author: PropTypes.string.isRequired,
    saveQuestion: PropTypes.func.isRequired
};

NewQuestion = withStyles(styles)(NewQuestion);

const mapStateToProps = (state) => ({
    author: state.authedUser
})

const mapDispatchToProps = (dispatch) => ({
    saveQuestion: (question) => dispatch(dispatch_saveQuestionAction(question))
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(NewQuestion));