import React, { Component } from 'react';
import './App.css';
import Chatkit from '@pusher/chatkit';

import CreateRoomForm from './components/CreateRoomForm';
import MessageList from './components/MessageList';
import RoomList from './components/RoomList';
import SendMessageForm from './components/SendMessageForm';

import { tokenUrl, instanceLocator } from './config';

class App extends Component {

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
      currentUser.subscribeToRoom({
        roomId: 16823118,
        hooks: {
          onNewMessage: message => {
            console.log('message.text: ', message.text);
          }
        }
      })
    })
  }

  render() {
    return (
      <div className="App">
        <CreateRoomForm />
        <MessageList />
        <RoomList />
        <SendMessageForm />
      </div>
    );
  }
}

export default App;
