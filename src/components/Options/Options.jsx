import React, { Component } from 'react';

import { withStyles } from '@material-ui/core/styles';
import Switch from '@material-ui/core/Switch';
import Slider from '@material-ui/lab/Slider';

const styles = {
  slider: {
    padding: '2px 0px',
  },
}

class Options extends Component {

  state = {
    volumeValue: 50,
    micValue: 100,
    fontSizeValue: 2,
  }

  handleVolumeChange = (event, value) => {
    this.setState({ volumeValue: value });
  };
  handleMicVolumeChange = (event, value) => {
    this.setState({ micValue: value });
  };
  handleFontSizeChange = (event, value) => {
    this.setState({ fontSizeValue: value });
  };

  render() {
    return (
      <div className="options">
        <div className="option switch-option">
          <p>Dark Theme</p>
          <Switch
              color="primary"
            />
        </div>
        <div className="option slider-option">
          <p id="label">Volume</p>
          <Slider
            className={{ container: styles.slider }}
            value={this.state.volumeValue}
            min={0}
            max={100}
            step={1}
            aria-labelledby="label"
            onChange={this.handleVolumeChange}
            />
        </div>
        <div className="option slider-option">
          <p id="label">Microphone Volume</p>
            <Slider
              className={{ container: styles.slider }}
              value={this.state.micValue}
              min={0}
              max={100}
              step={1}
              aria-labelledby="label"
              onChange={this.handleMicVolumeChange}
              />
        </div>
        <div className="option slider-option">
          <p>Font Size</p>
            <Slider
              className={{ container: styles.slider }}
              value={this.state.fontSizeValue}
              min={1}
              max={3}
              step={1}
              aria-labelledby="label"
              onChange={this.handleFontSizeChange}
              />
        </div>
      </div>
    );
  }

}

export default withStyles(styles)(Options);
