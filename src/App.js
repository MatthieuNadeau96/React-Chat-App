import React, { Component } from 'react';
import './App.css';
import Chatkit from '@pusher/chatkit';

import CreateRoomForm from './components/ChatRooms/CreateRoomForm';
import RoomList from './components/ChatRooms/RoomList';
import MessageList from './components/Messaging/MessageList';
import SendMessageForm from './components/Messaging/SendMessageForm';
import NavBar from './components/Navigation/NavBar';
import Backdrop from './components/Navigation/Backdrop.jsx';
import SideDrawer from './components/Navigation/SideDrawer';

import { tokenUrl, instanceLocator } from './config';

class App extends Component {

  state = {
    roomId: null,
    messages: [],
    joinableRooms: [],
    joinedRooms: [],
    sideDrawerOpen: false
  }

  componentDidMount() {
    const chatManager = new Chatkit.ChatManager({
        instanceLocator,
        userId: 'timmy',
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

  createRoom = (name) => {
    this.currentUser.createRoom({
      name
    })
    .then(room => this.subscribeToRoom(room.id))
    .catch(err => console.log('error on creatRoom: ', err));
  }

  // Handling mobile view

  drawerToggleClickHandler = (prevState) => {
    this.setState((prevState) => {
      return {sideDrawerOpen: !prevState.sideDrawerOpen}
    })
  }

  backdropToggle = () => {
    this.setState({ roomMenuOpen: false})
  }

  render() {
    let backdrop;

    if (this.state.sideDrawerOpen) {
      backdrop = <Backdrop click={this.drawerToggleClickHandler}/>;
    }

    return (
      <div className="App">
        <NavBar drawerToggleClickHandler={this.drawerToggleClickHandler}/>
        <SideDrawer
          show={this.state.sideDrawerOpen}
          id={this.state.roomId}
          subToRoom={this.subscribeToRoom}
          room={[...this.state.joinableRooms, ...this.state.joinedRooms]}
          createRoom={this.createRoom}
          clicked={this.drawerToggleClickHandler}
          />
        {backdrop}
        <RoomList
          roomId={this.state.roomId}
          subscribeToRoom={this.subscribeToRoom}
          rooms={[...this.state.joinableRooms, ...this.state.joinedRooms]}
          />
        <MessageList messages={this.state.messages}/>
        <SendMessageForm sendMessage={this.sendMessage} />
        <CreateRoomForm createRoom={this.createRoom}/>
      </div>
    );
  }
}

export default App;


// TODO: close sideDrawer onClick of a room
