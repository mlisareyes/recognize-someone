import React, { Component } from 'react'
import { connect } from 'react-redux';
import Main from './containers/Main'
import Recognitions from './containers/Recognitions'
import About from './components/About'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import './App.css'


class App extends Component {
  render() {
    return (
      <div className="app-container">
        <Router>
          <Switch>
            <Route exact path='/' component={Main} />
            <Route exact path='/about' component={About} />
            <Route exact path='/recognitions' component={Recognitions} />
          </Switch>
        </Router>
      </div>
    );
  }
}
export default App
