import React, { Component } from 'react';
import './App.css';

import CreateRoomForm from './components/CreateRoomForm';
import MessageList from './components/MessageList';
import RoomList from './components/RoomList';
import SendMessageForm from './components/SendMessageForm';

class App extends Component {
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
