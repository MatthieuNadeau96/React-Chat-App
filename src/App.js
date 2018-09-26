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
    messages: [],
    joinableRooms: [],
    joinedRooms: []
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

      this.currentUser.getJoinableRooms()
      .then(joinableRooms => {
        this.setState({
          joinableRooms,
          joinedRooms: this.currentUser.rooms
        })
      })
      .catch(err => console.log('error on joinableRooms: ', err))

      this.currentUser.subscribeToRoom({
        roomId: 17095431,
        hooks: {
          onNewMessage: message => {
            this.setState({
              messages: [...this.state.messages, message]
            })
          }
        }
      })
    })
    .catch(err => console.log('error on connecting: ', err))

  }

  sendMessage = (text) => {
    this.currentUser.sendMessage({
      text,
      roomId: 17095431
    })
  }

  render() {
    return (
      <div className="App">
        <CreateRoomForm />
        <MessageList messages={this.state.messages}/>
        <RoomList rooms={[...this.state.joinableRooms, ...this.state.joinedRooms]}/>
        <SendMessageForm sendMessage={this.sendMessage} />
      </div>
    );
  }
}

export default App;
