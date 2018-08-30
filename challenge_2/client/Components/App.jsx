import React, { Component } from 'react';
import Chart from './Chart/Chart';
import Select from './Select/Select';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentIndex: '',
      currencyData: {},
      startDate: '2018-01-01',
      newStartDate: 'YYYY-MM-DD',
      graphType: 'bar',
      ...props,
    };
    this.getCurrencyData = this.getCurrencyData.bind(this);
    this.handleSelectChange = this.handleSelectChange.bind(this);
    this.handleGraphTypeChange = this.handleGraphTypeChange.bind(this);
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

  handleSelectChange(e, key) {
    let { newStartDate } = this.state;
    const months = {
      Jan: '01',
      Feb: '02',
      March: '03',
      April: '04',
      May: '05',
      June: '06',
      July: '07',
      Aug: '08',
      Sept: '09',
      Oct: '10',
      Nov: '11',
      Dec: '12',
    };
    newStartDate = newStartDate.split('-');
    if (key === 'year') {
      newStartDate[0] = e.target.value;
    } else if (key === 'month') {
      newStartDate[1] = months[e.target.value];
    } else if (key === 'date') {
      newStartDate[key] = `0${+e.target.value}`;
    }
    newStartDate = newStartDate.join('-');
    this.setState({ newStartDate });
  }

  handleGraphTypeChange(e) {
    this.setState({ graphType: e.target.value });
  }

  render() {
    const { handleSelectChange, state } = this;
    const { graphType } = state;
    return (
      <div id="app-container">
        <Select handleSelectChange={handleSelectChange} {...this.state} />
        <select value={graphType} onChange={this.handleGraphTypeChange}>
          <option value="bar">Bar</option>
          <option value="line">Line</option>
        </select>
        <Chart {...this.state} />
        <i>Powered By CoinDesk</i>
      </div>

    );
  }
}

export default App;
