import React, {Component} from 'react';
import { connect } from 'react-redux'
import { dispatch_initialActionData } from '../actions/actionDispatchers' 
import SignIn from './SignIn'
class App extends Component {
 componentDidMount() {
   this.props.initialData()
 }
  render() { 
    return ( 
      <div>
        <SignIn />
      </div>
     );
  }
}

const mapDispatchToProps = (dispatch) => ({
  initialData: () => dispatch(dispatch_initialActionData())
})

export default connect(null,mapDispatchToProps)(App);
