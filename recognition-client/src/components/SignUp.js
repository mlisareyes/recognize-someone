import React, {Component} from 'react';
import {createUser} from '../actions/createUser'
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom';
import { Form, Button } from 'react-bootstrap'


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
        <h3>Sign Up Here</h3>
        <Form onSubmit={this.handleOnSubmit}>
          <Form.Group controlId="formSignUpFirstName">
            <Form.Control type="text" name="first_name" placeholder="First Name" value={this.state.first_name} onChange={this.handleOnChange} />
          </Form.Group>

          <Form.Group controlId="formSignUpLastName">
            <Form.Control type="text" name="last_name" placeholder="Last Name" value={this.state.last_name} onChange={this.handleOnChange} />
          </Form.Group>

          <Form.Group controlId="formSignUpEmail">
            <Form.Control type="email" name="email" placeholder="Enter Email" value={this.state.email} onChange={this.handleOnChange} />
          </Form.Group>

          <Form.Group controlId="formSignUpPassword">
            <Form.Control type="password" name="password" placeholder="Password" value={this.state.password} onChange={this.handleOnChange}/>
          </Form.Group>

          <Button variant="primary" type="submit">
            Sign Up
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

export default connect(mapStateToProps, {createUser})(withRouter(SignUp))
