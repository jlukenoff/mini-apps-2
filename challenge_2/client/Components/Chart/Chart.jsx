import React from 'react';
import { Bar } from 'react-chartjs-2';

const Chart = ({ currencyData, currentIndex, graphType }) => {
  const cfg = {
    type: 'bar',
    data: {
      labels: Object.keys(currencyData),
      datasets: [{
        label: `${currentIndex}`,
        data: Object.values(currencyData),
        type: graphType,
        pointRadius: 0,
        fill: false,
        lineTension: 0,
        borderWidth: 2,
        borderColor: 'green',
      }],
    },
    options: {
      maintainAspectRatio: true,
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
    <div style={{width:'70%', height:'auto' }}>
      <Bar
        {...cfg}
      />
    </div>
  );
};

export default Chart;
