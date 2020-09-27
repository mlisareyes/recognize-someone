import React, {Component} from 'react'
import Main from './containers/Main'
import Newsfeed from './components/Newsfeed'
import About from './components/About'
import {connect} from 'react-redux'
import {currentUser} from './actions/currentUser'
import { BrowserRouter, Route } from 'react-router-dom';
// import './App.css';

class App extends Component {
  // add component did mount
  componentDidMount() {
    this.props.currentUser()
  }

  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Route exact path='/' component={Main} />
          <Route exact path='/about' component={About} />
          <Route exact path='/newsfeed' component={Newsfeed} />
        </BrowserRouter>
      </div>
    );
  }
}

const mapStateToProps = ({ user }) => {
  return {
    user
  }
}

export default connect(mapStateToProps, {currentUser})(App)
