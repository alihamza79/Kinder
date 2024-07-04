import React from 'react';
import ApexCharts from 'apexcharts';

class SleepChart extends React.Component {
  componentDidMount() {
    const options = {
      chart: {
        height: 200,
        type: "line",
        toolbar: {
          show: false
        }
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        curve: "smooth"
      },
      series: [{
        name: "Sleep",
        color: '#2E37A4',
        data: [20, 21, 20, 21, 20, 21, 22]
      }],
      xaxis: {
        categories: ['0', '1', '2', '3', '4', '5', '6']
      }
    };

    const chart = new ApexCharts(document.querySelector("#sleep-chart"), options);
    chart.render();
  }

  render() {
    return (
      <div id="sleep-chart"></div>
    );
  }
}

export default SleepChart;