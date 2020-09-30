import React, {Component} from 'react'

class RecognitionForm extends Component {
  state = {
    receiver: "",
    content: "",
    author: ""
  }

  handleOnChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleOnSubmit = event => {
    event.preventDefault();
    this.props.createRecognition(this.state, () => {
      receiver: this.state.receiver,
      content: this.state.content,
      author: this.state.author

    })
    this.setState({
      receiver: "",
      content: "",
      author: ""
    })
  }

  render() {
    return(
      <div className="RecognitionForm">
        <form onSubmit={this.handleOnSubmit}>
          <br />
          <input
            type="search"
            name="receiver"
            placeholder="Send to:"
            value={this.state.receiver}
            onChange={this.handleOnChange}
          /><br />

          <input
            type="text"
            name="content"
            placeholder="content"
            value={this.state.content}
            onChange={this.handleOnChange}
          /><br />

// the author should be automatic to the current user
          <input
            type="submit"
            value="Submit"
          />
        </form>
      </div>
    )

  }

}

export default RecognitionForm
