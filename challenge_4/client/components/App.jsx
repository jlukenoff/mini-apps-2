import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import renderField from '../reducers/generate_field';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      board: renderField(10),
      ...props,
    };
  }

  render() {
    return (
      <div>
        
      </div>
    );
  }
}

App.propTypes = {
};

export default App;
