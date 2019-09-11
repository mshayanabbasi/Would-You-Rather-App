import React from 'react';
import PropTypes from 'prop-types'
import Card from '@material-ui/core/Card'
import CardHeader from '@material-ui/core/CardHeader'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'
import InputLabel from '@material-ui/core/InputLabel'
import FormControl from '@material-ui/core/FormControl'
import FilledInput from '@material-ui/core/FilledInput'
import Select from '@material-ui/core/Select'
import MenuItem from '@material-ui/core/MenuItem'
import styles from './styles/SignIn'
import { withStyles } from '@material-ui/core/styles'
import { connect } from 'react-redux'
import { dispatch_authedUserAction } from '../actions/actionDispatchers'
import { withRouter, Redirect } from 'react-router-dom'

const SignIn = (props) => {
	const { classes, users, authedUser, login } = props
	console.log('users', users)
    return (
		authedUser ? <Redirect 
			to={{
				pathname: (props.location.state) ? props.location.state.referrer : "/"
			}}
		/>
		:
		(
		<div className={classes.centerScreen}>
            <Card className={classes.card} raised>
            	<CardHeader 
            		title="WOULD YOU RATHER?"
            		classes={{ title: classes.header, }}
            	/>
            	<img 
            		src={require("../images/app-logo.png")}
            		className={classes.media}
            		alt="would you rather logo"
            	/>
            	<CardContent>
            		<Typography gutterBottom variant="h5" component="h2" className={classes.detailTitle}>
            			Sign In
            		</Typography>
            		<FormControl variant="filled" className={classes.actions} component="div">
					<InputLabel htmlFor="username" FormLabelClasses={{
                            root: classes.cssLabel,
                            focused: classes.cssFocused,
                        }}>User Name</InputLabel>
						<Select 
							value={authedUser}
							onChange={login}
							input={<FilledInput name="username" id="username" classes={{
								underline: classes.underline
							}}/>}
						>
							<MenuItem value="">
								<em>None</em>
							</MenuItem>
							{
								  Object.values(users).map((user) =>
								  <MenuItem key={user.id} value={user.id} >
									  {user.name}
								  </MenuItem>)
							} 
						</Select>
            		</FormControl>
            	</CardContent>
            </Card>
        </div>
		)
    ) 
}


SignIn.propTypes = {
	classes: PropTypes.object.isRequired,
	users: PropTypes.object.isRequired,
	authedUser: PropTypes.oneOfType([
			PropTypes.string,
			PropTypes.bool
		]).isRequired,
	login: PropTypes.func.isRequired
}

const mapStateToProps = (state) => ({
	users: state.users,
	authedUser: state.authedUser
})

const mapDispatchToProps = (dispatch) => ({
	login: (event) => dispatch(dispatch_authedUserAction(event.target.value))
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(SignIn)))