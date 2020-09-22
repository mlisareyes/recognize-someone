import React, {Component} from 'react';
import {connect} from 'react-redux';
import Login from '../components/Login';
import {loginUser} from '../actions/loginUser'
import SignUp from '../components/SignUp'
import {createUser} from '../actions/createUser'

class Main extends Component {

  render() {
    return(
      <div>
        <SignUp createUser={this.props.createUser}/>
        <Login loginUser={this.props.loginUser}/>
      </div>
    )
  }
}

export default connect(null, {createUser, loginUser})(Main)
