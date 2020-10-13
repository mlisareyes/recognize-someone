import React, {Component} from 'react';
import {createUser} from '../actions/createUser'
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom';


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
    this.props.createUser(this.state, () => {
      // first_name: this.state.first_name,
      // last_name: this.state.last_name,
      // email: this.state.email,
      // password: this.state.password
      this.props.history.push('/home')
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
          <input
            type="text"
            name="first_name"
            placeholder="First Name"
            value={this.state.first_name}
            onChange={this.handleOnChange}
          /><br />

          <input
            type="text"
            name="last_name"
            placeholder="Last Name"
            value={this.state.last_name}
            onChange={this.handleOnChange}
          /><br />

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
            value="Sign Up"
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

export default connect(mapStateToProps, {createUser})(withRouter(SignUp))
