import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Search from './components/Search';
import Results from './components/Results';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputVal: '',
      results: [],
    };
    this.submitSearch = this.submitSearch.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  submitSearch() {
    const { inputVal } = this.state;
    fetch(`/events?q=${inputVal}`)
      .then(chunk => chunk.json())
      .then(results => this.setState({ results }))
      .catch(err => console.error(`Error fetching data: ${err}`));
  }

  handleInputChange(e) {
    this.setState({ inputVal: e.target.value });
  }

  render() {
    const {
      submitSearch,
      handleInputChange,
      state,
    } = this;
    return (
      <div className="container">
        <Search
          submitSearch={submitSearch}
          handleInputChange={handleInputChange}
        />
        <Results {...state} />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
