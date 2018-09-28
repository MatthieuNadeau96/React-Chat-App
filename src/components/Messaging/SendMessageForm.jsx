import React, { Component } from 'react';

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
          placeholder="Type your message and press ENTER"
        />
      </form>
    );
  }

}

export default SendMessageForm;
