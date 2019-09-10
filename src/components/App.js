import React, {Component} from 'react';
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { dispatch_initialActionData } from '../actions/actionDispatchers' 
import Loader from './Loader'
import PropTypes from 'prop-types'
import './styles/App.css'
import Routers from '../routers'
class App extends Component {
 componentDidMount() {
   this.props.initialData()
 }
  render() { 
    return ( 
     this.props.loading ? 
     <Loader /> 
     : (
       <div>
         <Routers />
       </div>
     ) 
    );
  }
}

App.propTypes = {
  loading: PropTypes.bool.isRequired,
  initialData: PropTypes.func.isRequired
}

const mapStateToProps = (state) => ({
  loading: state.loading
})

const mapDispatchToProps = (dispatch) => ({
  initialData: () => dispatch(dispatch_initialActionData())
})

export default withRouter(connect(mapStateToProps,mapDispatchToProps)(App));
