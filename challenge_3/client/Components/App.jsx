import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Keypad from './Keypad/Keypad';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pinCount: 10,
      ...props,
    };
    this.handleKeyPadEntry = this.handleKeyPadEntry.bind(this);
  }

  handleKeyPadEntry(e) {
    e.preventDefault();
    this.setState({ pinCount: +e.target.value });
  }

  render() {
    return (
      <div id="app-container">
        <Keypad />
      </div>
    );
  }
}

App.propTypes = {
};

export default App;
