import React, { Component } from 'react';
import PropTypes from 'prop-types'
import { Redirect, Link, withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import classNames from 'classnames'
import Drawer from '@material-ui/core/Drawer'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import CssBaseLine from '@material-ui/core/CssBaseline'
import Typography from '@material-ui/core/Typography'
import List from '@material-ui/core/List'
import Divider from '@material-ui/core/Divider'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft'
import ChevronRightIcon from '@material-ui/icons/ChevronRight'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import HomeOutlined from '@material-ui/icons/HomeOutlined'
import QuestionAnswer from '@material-ui/icons/QuestionAnswerOutlined'
import TrendingUpSharp from '@material-ui/icons/TrendingUpSharp';
import ExitToApp from '@material-ui/icons/ExitToApp';
import styles from './styles/Dashboard'
import Avatar from './Avatar'
import { withStyles } from '@material-ui/core/styles'
import SnackbarPopUp from './SnackbarPopUp'

class Dashboard extends Component {
    state = { 
        open: false
    }
    handleDrawerOpen = () => {
        this.setState({
            open: true
        })
    }
    handleDrawerClose = () => {
        this.setState({
            open: false
        })
    }
    render() { 
        const { classes, theme, authedUser, username, avatarURL, children } = this.props
        return (  
            !authedUser ? 
            <Redirect 
                to={{
                    pathname: "/signin",
                    state: {referrer: this.props.location.pathname}
                }}
            />
            : (<div className={classes.root}>
                <CssBaseLine />
                <AppBar 
                    position="fixed"
                    className={classNames(classes.appBar, {
                        [classes.appBarShift]: this.state.open
                    })}
                >
                    <Toolbar disableGutters={!this.state.open}>
                        <IconButton
                            aria-label="Open drawer"
                            onClick={this.handleDrawerOpen}
                            className={classNames(classes.menuButton, {
                                [classes.hide]: this.state.open
                            })}
                        >
                            <MenuIcon />
                        </IconButton>
                        <Typography 
                            variant="h6" 
                            className={classes.grow}
                            width="content"
                            noWrap>
                                Would You Rather?
                            </Typography>
                            <div style={{display: 'flex', justifyContent: 'center'}}>
                                <Avatar width={65} height={65} avatarURL={avatarURL} authorName={username} />
                            </div>
                            <Typography variant="h6" className={classes.username}>
                                Welcome {username}
                            </Typography>
                    </Toolbar>
                </AppBar>
                <Drawer 
                    variant="permanent"
                    className={classNames(classes.drawer, {
                        [classes.drawerOpen]: this.state.open,
                        [classes.drawerClose]: !this.state.open,
                    })}
                    classes={{
                        paper: classNames({
                            [classes.drawerOpen]: this.state.open,
                            [classes.drawerClose]: !this.state.open
                        })
                    }}
                    open={this.state.open}
                >
                    <div className={classes.toolbar} style={{ backgroundColor: '#008080',}}>
                        <IconButton onClick={this.handleDrawerClose}>
                            {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
                        </IconButton>
                    </div>
                    <Divider />
                    <List>
                        <Link to="/">
                            <ListItem button key="Home">
                                <ListItemIcon><HomeOutlined /></ListItemIcon>
                                <ListItemText primary="Home" />
                            </ListItem>
                        </Link>
                        <Link to="/add">
                            <ListItem button key="NewQuestion">
                                <ListItemIcon><QuestionAnswer /></ListItemIcon>
                                <ListItemText primary="New Question" />
                            </ListItem>
                        </Link>
                        <Link to="/leaderboard">
                            <ListItem button key="LeaderBoard">
                                <ListItemIcon><TrendingUpSharp /></ListItemIcon>
                                <ListItemText primary="Leader Board" />
                            </ListItem>
                        </Link>
                        <Link to="/signout">
                            <ListItem button key="SignOut">
                                <ListItemIcon><ExitToApp /></ListItemIcon>
                                <ListItemText primary="Sign Out" />
                            </ListItem>
                        </Link>
                    </List>
                    <Divider className={classes.divider}/>
                </Drawer>
                <SnackbarPopUp close={this.state.open}/>
                <div className={classes.content}>
                    {children}
                </div>
            </div>
            )
        )
    }
}
 
Dashboard.propTypes = {
    classes: PropTypes.object.isRequired,
    theme: PropTypes.object.isRequired,
    authedUser: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.bool
    ]).isRequired,
    username: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.bool
    ]).isRequired,
    avatarURL: PropTypes.string.isRequired,
    children: PropTypes.object.isRequired
}
Dashboard = withStyles(styles, {withTheme: true})(Dashboard)

const mapStateToProps = (state) => {
    return ({
        authedUser: state.authedUser,
        username: (state.authedUser) ? state.users[state.authedUser].name : false,
        avatarURL: (state.authedUser) ? state.users[state.authedUser].avatarURL : '',
    })
}

export default withRouter(connect(mapStateToProps)(Dashboard))