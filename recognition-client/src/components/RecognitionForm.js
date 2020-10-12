import React, {Component} from 'react'
import {connect} from 'react-redux'
import {createRecognition} from '../actions/createRecognition'

class RecognitionForm extends Component {
  state = {
    receiver_id: "",
    content: "",
    author_id: ""
  }

  shouldComponentUpdate() {
    return true
  }

  handleOnChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleOnSubmit = event => {
    event.preventDefault()
    this.props.createRecognition({
      receiver_id: Number(this.state.receiver_id),
      content: this.state.content,
      author_id: Number(this.state.author_id)
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
          <input
            type="integer"
            name="receiver_id"
            placeholder="Send to"
            value={this.state.receiver_id}
            onChange={this.handleOnChange}
          /><br />

          <input
            type="text"
            name="content"
            placeholder="Write your recognition here!"
            value={this.state.content}
            onChange={this.handleOnChange}
          /><br />

          <input
            type="integer"
            name="author_id"
            placeholder="Sender"
            value={this.state.author_id}
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

export default connect(null, {createRecognition})(RecognitionForm)
// const mapStateToProps = ({user}) => {
//   return {
//     user
//   }
// }

// export default connect(mapStateToProps, {createRecognition})(RecognitionForm)
