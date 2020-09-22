import React, {Component} from 'react';

class SignUp extends Component {
  constructor(props) {
    super(props)

    this.state = {
      first_name: "",
      last_name: "",
      email: "",
      password: ""
    }
  }

  handleOnChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleOnSubmit = event => {
    event.preventDefault()
    this.props.createUser({
      first_name: this.state.first_name,
      last_name: this.state.last_name,
      email: this.state.email,
      password: this.state.password
    })
    this.setState({
      first_name: "",
      last_name: "",
      email: "",
      password: ""
    })
  }

  render() {
    return(
      <div className="SignUp">
        <form onSubmit={this.handleOnSubmit}>
          <br />
          <input type="text" name="firstname" placeholder="First Name" value={this.state.first_name} onChange={this.handleOnChange} />
          <br />
          <input type="text" name="lastname" placeholder="Last Name" value={this.state.last_name} onChange={this.handleOnChange} />
          <br />
          <input type="email" name="email" placeholder="email" value={this.state.email} onChange={this.handleOnChange} />
          <br />
          <input type="password" name="password" placeholder="password" value={this.state.password} onChange={this.handleOnChange} />
          <br />
          <input type="submit" value="Sign Up" />
        </form>
      </div>
    )
  }
}

export default SignUp
