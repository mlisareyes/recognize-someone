import React, { Component } from 'react'
import Main from './containers/Main'
import Recognitions from './containers/Recognitions'
import UserContainer from './containers/UserContainer'
import About from './components/About'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';


class App extends Component {

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

export default App
