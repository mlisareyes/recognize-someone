import React, {Component} from 'react'
import {connect} from 'react-redux'
import {createRecognition} from '../actions/createRecognition'
// import {getUsers} from '../actions/getUsers'
// import { Dropdown } from 'semantic-ui-react'

class RecognitionForm extends Component {
  state = {
    receiver_id: "",
    content: "",
    author_id: ""
  }

  handleOnChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleOnSubmit = event => {
    event.preventDefault()
    this.props.createRecognition({
      receiver_id: event.target[0].value,
      content: this.state.content,
      author_id: this.props.currentUser.id
    });

    this.setState({
      receiver_id: "",
      content: "",
      author_id: ""
    })
  }

  render() {
    return(
      <div className="RecognitionForm">

        <form onSubmit={this.handleOnSubmit}>
          <br />
          <h1>Who Do You Want to Recognize?</h1>
          <select placeholder="Employee">{this.props.users.map((user, index) => (
            <option
              key={index}
              value={user.id}
              onChange={this.handleOnChange}
              >
              {user.attributes.full_name}
            </option>))}
          </select><br />

          <input
            type="text"
            name="content"
            placeholder="Write your recognition here!"
            value={this.state.content}
            onChange={this.handleOnChange}
          /><br />

          <input
            type="submit"
            value="Submit"
          />
        </form>
      </div>
    )
  }
}

const mapStateToProps = ({currentUser, users}) => {
  return {
    currentUser: currentUser,
    users: users
  }
}
export default connect(mapStateToProps, {createRecognition})(RecognitionForm)
