import React, { Component } from 'react';
import './App.css';
import Chatkit from '@pusher/chatkit';
import CreateRoomForm from './components/CreateRoomForm';
import MessageList from './components/MessageList';
import RoomList from './components/RoomList';
import SendMessageForm from './components/SendMessageForm';

import { tokenUrl, instanceLocator } from './config';

class App extends Component {

  state = {
    messages: []
  }

  componentDidMount() {
    const chatManager = new Chatkit.ChatManager({
        instanceLocator,
        userId: 'domdom',
        tokenProvider: new Chatkit.TokenProvider({
          url: tokenUrl
        })
    })

    chatManager.connect()
    .then(currentUser => {
      this.currentUser = currentUser
      this.currentUser.subscribeToRoom({
        roomId: 16823118,
        hooks: {
          onNewMessage: message => {
            this.setState({
              messages: [...this.state.messages, message]
            })
          }
        }
      })
    })
  }

  sendMessage = (text) => {
    this.currentUser.sendMessage({
      text,
      roomId: 16823118
    })
  }

  render() {
    return (
      <div className="App">
        <CreateRoomForm />
        <MessageList messages={this.state.messages}/>
        <RoomList />
        <SendMessageForm sendMessage={this.sendMessage} />
      </div>
    );
  }
}

export default App;
