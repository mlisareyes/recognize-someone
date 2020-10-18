import React, {Component} from 'react';
import {connect} from 'react-redux'
import {loginUser} from '../actions/loginUser'
import {withRouter} from 'react-router-dom';
import { Form, Button } from 'react-bootstrap'

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
      this.props.history.push('/home')
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
        <h3>Log In Here</h3>
        <Form onSubmit={this.handleOnSubmit}>
          <Form.Group controlId="formEmail">
            <Form.Control type="email" name="email" placeholder="Enter Email" value={this.state.email} onChange={this.handleOnChange} />
          </Form.Group>

          <Form.Group controlId="formPassword">
            <Form.Control type="password" name="password" placeholder="Password" value={this.state.password} onChange={this.handleOnChange}/>
          </Form.Group>

          <Button variant="primary" type="Log In">
            Submit
          </Button>
        </Form>
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
