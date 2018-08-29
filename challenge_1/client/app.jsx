import React, { Component } from 'react';
import ReactDOM from 'react-dom';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.submitSearch = this.submitSearch.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  render() {
    return (
      <div>hello world</div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
