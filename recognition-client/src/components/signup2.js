<Form onSubmit={this.handleOnSubmit}>
  <Form.Group controlId="formSignUpFirstName">
    <Form.Control type="text" name="first_name" placeholder="First Name" value={this.state.first_name} onChange={this.handleOnChange} />
  </Form.Group>

  <Form.Group controlId="formSignUpLastName">
    <Form.Control type="email" name="email" placeholder="Last Name" value={this.state.last_name} onChange={this.handleOnChange} />
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
