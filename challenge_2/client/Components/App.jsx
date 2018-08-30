import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentIndex: '',
      currencyData: {},
      ...props,
    };
  }

  componentDidMount() {

  }

  getCurrencyData(currentIndex, startDate = '2018-01-01') {
    fetch(`/api/${currentIndex}/from/${startDate}`)
      .then(chunk => chunk.json())
      .then(result => this.setState({ currentIndex, currencyData: result.bpi }))
      .catch(err => console.error(`Error fetching data: ${err}`));
  }

  render() {
    const { currencyData } = this.state;
    return (
      <div>hello from react</div>
    );
  }
}

export default App;
