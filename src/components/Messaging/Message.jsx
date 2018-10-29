import React, { Component } from 'react';

import Avatar from '@material-ui/core/Avatar';

class Message extends Component {

  render() {
    return (
      <div className="message">
        <div className="message-username">{this.props.username}</div>
        <div className="message-nameDisplay">
          <Avatar style={avatar}>T</Avatar>
          <div className="message-text">{this.props.text}</div>
        </div>
      </div>
    );
  }
}

const avatar = {
  margin: 6,
  height: 40,
  width: 40,
  fontSize: '1em',
  color: '#fff',
  backgroundColor: '#FF9B9B'
}

export default Message;
