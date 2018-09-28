import React from 'react';

const ToggleRoomButton = props => (
  <button className="toggleRoomMenuButton" onClick={props.click}><i className="fas fa-bars"></i></button>
);

export default ToggleRoomButton;
