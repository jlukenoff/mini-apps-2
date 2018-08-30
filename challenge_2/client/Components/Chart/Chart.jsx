import React, { Component } from 'react';
import { Bar } from 'react-chartjs-2';
import moment from 'moment';

const Chart = ({ currencyData, currentIndex, startDate }) => {
  const cfg = {
    type: 'bar',
    data: {
      labels: Object.keys(currencyData),
      datasets: [{
        label: `${currentIndex}`,
        data: Object.values(currencyData),
        type: 'line',
        pointRadius: 0,
        fill: false,
        lineTension: 0,
        borderWidth: 2,
        borderColor: 'green',
      }],
    },
    options: {
      scales: {
        yAxes: [{
          scaleLabel: {
            display: true,
            labelString: 'Closing price ($)',
          },
        }],
      },
    },
  };
  return (
    <Bar
      {...cfg}
    />
  );
};

export default Chart;
