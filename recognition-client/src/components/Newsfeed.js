import React, { Component } from 'react'
import { connect } from 'react-redux';
import {deleteRecognition} from '../actions/deleteRecognition'
import { Button, Card } from 'react-bootstrap'


class Newsfeed extends Component {

  handleOnClick = event => {
    this.props.deleteRecognition(event.target.value)
  }

  renderRecognitions = (recognitions) => {
    return recognitions.map((recognition, index) => {
      return (
        <div key={index} className="all-recognitions">
          <Card style={{ width: '30rem'}}>
            <Card.Body>
              <Card.Header as="h5">{recognition.attributes.receiver.first_name + " " + recognition.attributes.receiver.last_name}</Card.Header><br />
              <Card.Subtitle>Recognized For:</Card.Subtitle><br />
              <Card.Text>{recognition.attributes.content}</Card.Text>
              <Card.Text>Written By: {recognition.attributes.author.first_name + " " + recognition.attributes.author.last_name}</Card.Text>
              <Card.Text>{Number(this.props.currentUser.id) === recognition.attributes.author.id ? <Button variant="primary" onClick={this.handleOnClick} value={recognition.id}>Delete</Button> : null}</Card.Text>
            </Card.Body>
          </Card>
        </div>
      )
    })
  }

  render() {
    return (

      <div className="recognition-container">
        {this.renderRecognitions(this.props.recognitions)}
      </div>
    )
  }
}

const mapStateToProps = ({currentUser}) => {
  return {
    currentUser: currentUser
  }
}

export default connect(mapStateToProps, {deleteRecognition})(Newsfeed)
