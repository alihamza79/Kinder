import React, { useEffect, useRef } from 'react';
import ApexCharts from 'apexcharts';

const MarketAreaChart = () => {
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
            color: '#2E37A4',
            data: [45, 60, 75, 51, 42, 42, 30],
          },
        ],
        xaxis: {
          categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
        },
      };

      const chart = new ApexCharts(chartRef.current, options);
      chart.render();

      return () => {
        chart.destroy();
      };
    }
  }, []);

  return <div id="market-area" ref={chartRef}></div>;
};

export default MarketAreaChart;
