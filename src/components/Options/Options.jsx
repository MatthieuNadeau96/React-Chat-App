import React from 'react';

import Switch from '@material-ui/core/Switch';

const Options = props => (
  <div className="options">
    <div className="option">
      <p>Dark Theme</p>
      <Switch
          color="primary"
        />
    </div>
    <div className="option">
      <p>Voice Volume</p>
    </div>
    <div className="option">
      <p>Microphone Volume</p>
    </div>
    <div className="option">
      <p>Font Size</p>
    </div>
  </div>
);

export default Options;
