import React, { Component } from 'react';
import Chart from './Chart/Chart';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentIndex: '',
      currencyData: {},
      startDate: '2018-01-01',
      ...props,
    };
    this.getCurrencyData = this.getCurrencyData.bind(this);
  }

  componentDidMount() {
    this.getCurrencyData();
  }

  getCurrencyData(currentIndex = 'BTC', startDate = '2018-01-01') {
    fetch(`/api/${currentIndex}/from/${startDate}`)
      .then(chunk => chunk.json())
      .then(result => this.setState({ currentIndex, currencyData: result.bpi, startDate }))
      .catch(err => console.error(`Error fetching data: ${err}`));
  }

  render() {
    return (
      <Chart {...this.state} />
    );
  }
}

export default App;
