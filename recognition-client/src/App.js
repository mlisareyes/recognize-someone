import React, {Component} from 'react'
import Main from './containers/Main'
import About from './components/About'
import Newsfeed from './components/Newsfeed'
// import Menu from './components/Menu'
// import Login from './components/Login'
// import UserContainer from './containers/UserContainer'
// import {connect} from 'react-redux'
// import {currentUser} from './actions/currentUser'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import './App.css'
// import { withRouter } from 'react-router'

class App extends Component {
  // componentDidMount() {
  //   this.props.currentUser()
  // }

  render() {
    return (
      <div className="app-container">
        <Router>
          <Switch>
            <Route exact path='/' component={Main} />
            <Route exact path='/about' component={About} />
            <Route exact path="/newsfeed" component={Newsfeed} />
          </Switch>
        </Router>
      </div>
    );
  }
}

// const mapStateToProps = ({user}) => {
//   return {
//     user
//   }
// }

// export default connect(mapStateToProps, {currentUser})(App)
export default App
