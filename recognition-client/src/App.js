import React, { Component } from 'react'
import { connect } from 'react-redux';
import Main from './containers/Main'
import Recognitions from './containers/Recognitions'
import UserContainer from './containers/UserContainer'
import About from './components/About'
import {BrowserRouter as Router, Route, Redirect} from 'react-router-dom'
// import {getRecognitions} from './actions/getRecognitions'
// import {getUsers} from './actions/getUsers'
// import {connect} from 'react-redux';
// import {currentUser} from './actions/currentUser'
import './App.css'


class App extends Component {
  // componentDidMount() {
  //   this.props.currentUser()
  // }

  render() {
    return (
      <div className="app-container">
        <Router>
          <Route exact path='/' component={Main} />
          <Route exact path='/about' component={About} />
          <Route exact path='/home' component={Recognitions} />
          <Route exact path='/myrecognitions' component={UserContainer} />
        </Router>
      </div>
    );
  }
}

const mapStateToProps = ({currentUser}) => {
  return {
    currentUser: currentUser
  }
}

export default connect(mapStateToProps)(App)
// export default App
// export default connect(null, {getRecognitions, getUsers})(App)
