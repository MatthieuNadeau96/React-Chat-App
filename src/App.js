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
    roomId: null,
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
      this.getRooms();

    })
    .catch(err => console.log('error on connecting: ', err))
  }

  getRooms = () => {
    this.currentUser.getJoinableRooms()
    .then(joinableRooms => {
      this.setState({
        joinableRooms,
        joinedRooms: this.currentUser.rooms
      })
    })
    .catch(err => console.log('error on joinableRooms: ', err))
  }

  subscribeToRoom = (roomId) => {
    this.setState({
      messages: []
    })
    this.currentUser.subscribeToRoom({
      roomId: roomId,
      hooks: {
        onNewMessage: message => {
          this.setState({
            messages: [...this.state.messages, message]
          })
        }
      }
    })
    .then(room => {
      this.setState({
        roomId: room.id
      })
      this.getRooms()
    })
    .catch(err => console.log('error on subscribing to room: ', err));
  }

  sendMessage = (text) => {
    this.currentUser.sendMessage({
      text,
      roomId: this.state.roomId
    })
  }

  render() {
    return (
      <div className="App">
        <CreateRoomForm />
        <RoomList
          subscribeToRoom={this.subscribeToRoom}
          rooms={[...this.state.joinableRooms, ...this.state.joinedRooms]}
          />
        <MessageList messages={this.state.messages}/>
        <SendMessageForm sendMessage={this.sendMessage} />
      </div>
    );
  }
}

export default App;
