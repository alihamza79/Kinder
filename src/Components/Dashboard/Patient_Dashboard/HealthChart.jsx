import React, { useEffect, useRef } from 'react';
import ApexCharts from 'apexcharts';

const MarketAreaChart = () => {
  const chartRef = useRef(null);

  useEffect(() => {
    if (chartRef.current) {
      const options = {
        chart: {
          height: 180,
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
            color: '#30E7ED',
            data: [20, 40, 85, 25, 50, 30, 50,20,50,40,30,20],
          },
        ],
        xaxis: {
          categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul','Aug','Sep','Oct','Nov','Dec'],
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
