import React, {Component} from 'react';

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
    event.preventDefault()
    this.props.loginUser({email: this.state.email, password: this.state.password})
    this.setState({
      email: "",
      password: ""
    })

  }

  render() {
    return(
      <div>
        <form onSubmit={this.handleOnSubmit}>
          <br />
          <label htmlFor="email">Email: </label>
          <br />
          <input type="email" name="email" value={this.state.email} onChange={this.handleOnChange} />
          <br />
          <label htmlFor="password">Password:</label>
          <br />
          <input type="password" name="password" value={this.state.password} onChange={this.handleOnChange} />
          <br />
          <input type="submit" value="login" />
          </form>
      </div>
    )
  }

}

export default Login
