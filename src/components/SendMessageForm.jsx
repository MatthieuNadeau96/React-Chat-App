import React from 'react';

const SendMessageForm = ({}) => (
  <form className="sendMessageForm child">
    <input
      onChange={this.handleChange }
      type="text"
      placeholder="Type your message and press ENTER"
    />
  </form>
);

export default SendMessageForm;
