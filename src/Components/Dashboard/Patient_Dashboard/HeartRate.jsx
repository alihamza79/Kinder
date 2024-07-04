import React, { useEffect, useRef } from 'react';
import ApexCharts from 'apexcharts';

const HeartRateChart = () => {
  const chartRef = useRef(null);

  useEffect(() => {
    if (chartRef.current) {
      const options = {
        chart: {
          height: 200,
          type: 'line',
          toolbar: {
            show: false,
          },
        },
        dataLabels: {
          enabled: false,
        },
        stroke: {
          curve: 'smooth',
        },
        series: [
          {
            name: 'Health',
            color: '#FF3667',
            data: [20, 20, 85, 35, 60, 30, 20],
          },
        ],
        xaxis: {
          categories: ['0', '1', '2', '3', '4', '5', '6'],
        },
      };

      const chart = new ApexCharts(chartRef.current, options);
      chart.render();

      return () => {
        chart.destroy();
      };
    }
  }, []);

  return <div id="heart-rate" ref={chartRef}></div>;
};

export default HeartRateChart;