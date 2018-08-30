import React from 'react';
import ReactDOM from 'react-dom';
import mockData from './mockData';
import App from './Components/App';

ReactDOM.render(<App currencyData={mockData} />, document.getElementById('app'));
