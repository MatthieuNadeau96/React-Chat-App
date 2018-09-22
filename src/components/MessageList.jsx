import React from 'react';

const DUMMY_DATA = [
  {
    senderId: 'paddypud',
    text: "Hey dude, what's up?"
  },
  {
    senderId: 'ollieorf',
    text: "Not much, hbu?"
  },
  {
    senderId: 'paddypud',
    text: "idk"
  },
  {
    senderId: 'ollieorf',
    text: 'ok'
  }
]

const MessageList = (props) => (
  <div className="messageList child">
    {
      DUMMY_DATA.map((message, index) => {
        return (
          <div key={index} className="message">
            <div className="message-username">{message.senderId}</div>
            <div className="message-text">{message.text}</div>
          </div>
        )
      })
    }
  </div>
);

export default MessageList;
