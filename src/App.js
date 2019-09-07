import React, {Component} from 'react';
import { connect } from 'react-redux'
import { handleInitialData } from './actions/shared' 
import SignIn from './components/SignIn'
class App extends Component {
 componentDidMount() {
   this.props.dispatch(handleInitialData())
 }
  render() { 
    return ( 
      <div>
        <SignIn />
      </div>
     );
  }
}


 
export default connect()(App);
