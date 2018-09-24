import React, { Component } from 'react';

class SendMessageForm extends Component {

  state = {
    message: ''
  }

  handleChange = (e) => {
    this.setState({message: e.target.value})
  }

  render() {
    console.log(this.state.message)
    return (
      <form className="sendMessageForm child">
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
