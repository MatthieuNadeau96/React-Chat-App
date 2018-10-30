import React, { Component } from 'react';

import Button from '@material-ui/core/Button';

class SendMessageForm extends Component {

  state = {
    message: ''
  }

  handleChange = (e) => {
    this.setState({message: e.target.value})
  }

  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state.message);
    this.props.sendMessage(this.state.message);
    this.setState({
      message: ''
    })
  }

  render() {
    return (
      <form
        onSubmit={this.handleSubmit}
        className="sendMessageForm child">
        <input
          onChange={this.handleChange}
          value={this.state.message}
          type="text"
          placeholder="Text Message..."
        />
      <Button
        style={sendButton}
        className="sendButton"
        >
        <i className="material-icons">send</i>
      </Button>
      </form>
    );
  }

}

const sendButton = {
  display: 'block',
  color: '#969CB6',
  background: "inherit",
  padding: 0,
  borderRadius: "50%"
}

export default SendMessageForm;
