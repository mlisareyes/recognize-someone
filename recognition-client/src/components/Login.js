import React, {Component} from 'react';
import {connect} from 'react-redux'
import {loginUser} from '../actions/loginUser'
import {withRouter} from 'react-router-dom';

class Login extends Component {
  state = {
    email: "",
    password: ""
  }

  handleOnChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleOnSubmit = event => {
    event.preventDefault();
    this.props.loginUser(this.state, () => {
      // console.log(this.props.user)
      this.props.history.push('/recognitions')
      // email: this.state.email,
      // password: this.state.password
    })
    this.setState({
      email: "",
      password: ""
    })
  }

  render() {
    return(
      <div className="Login">
        <form onSubmit={this.handleOnSubmit}>
          <br />
          <input
            type="email"
            name="email"
            placeholder="email"
            value={this.state.email}
            onChange={this.handleOnChange}
          /><br />

          <input
            type="password"
            name="password"
            placeholder="password"
            value={this.state.password}
            onChange={this.handleOnChange}
          /><br />

          <input
            type="submit"
            value="login"
          />
        </form>
      </div>
    )
  }
}

const mapStateToProps = ({user}) => {
  return {
    user
  }
}

export default connect(mapStateToProps, {loginUser})(withRouter(Login))
