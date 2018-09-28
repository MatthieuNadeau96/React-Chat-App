import React, { Component } from 'react';
import './App.css';
import Chatkit from '@pusher/chatkit';
import CreateRoomForm from './components/CreateRoomForm';
import MessageList from './components/MessageList';
import RoomList from './components/RoomList';
import SendMessageForm from './components/SendMessageForm';

import NavBar from './components/NavBar';
import Backdrop from './components/Backdrop.jsx';
import RoomMenu from './components/RoomMenu';
import ToggleRoomButton from './components/ToggleRoomButton';
import SideDrawer from './components/SideDrawer';

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

  // toggleRoomMenu = () => {
  //   this.setState((prevState) => {
  //     return {roomMenuOpen: !prevState.roomMenuOpen}
  //   })
  // }

  backdropToggle = () => {
    this.setState({ roomMenuOpen: false})
  }

  render() {
    let sideDrawer;
    let backdrop;

    if (this.state.sideDrawerOpen) {
      sideDrawer = <SideDrawer/>;
      backdrop = <Backdrop click={this.drawerToggleClickHandler}/>;
    }

    return (
      <div className="App">
        <NavBar drawerToggleClickHandler={this.drawerToggleClickHandler}/>
        {sideDrawer}
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
