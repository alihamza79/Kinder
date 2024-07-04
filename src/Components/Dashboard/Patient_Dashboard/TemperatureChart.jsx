import React, { useEffect, useRef } from 'react';
import ApexCharts from 'apexcharts';

const TemperatureChart = () => {
  const chartRef = useRef(null);

  useEffect(() => {
    if (chartRef.current) {
      const sColStacked = {
        chart: {
          height: 230,
          type: 'bar',
          stacked: false,
          toolbar: {
            show: false,
          },
        },
        responsive: [
          {
            breakpoint: 480,
            options: {
              legend: {
                position: 'bottom',
                offsetX: -10,
                offsetY: 0,
              },
            },
          },
        ],
        plotOptions: {
          bar: {
            horizontal: false,
            columnWidth: '90%',
          },
        },
        dataLabels: {
          enabled: false,
        },
        stroke: {
          show: true,
          width: 6,
          colors: ['transparent'],
        },
        series: [
          {
            name: 'Low',
            color: '#D5D7ED',
            data: [10, 30, 10, 30, 10, 30, 30],
          },
          {
            name: 'High',
            color: '#2E37A4',
            data: [20, 20, 20, 20, 20, 20, 20],
          },
        ],
        xaxis: {
          categories: ['1', '10', '20', '30', '40', '50', '60'],
        },
      };

      const chart = new ApexCharts(chartRef.current, sColStacked);
      chart.render();

      return () => {
        chart.destroy();
      };
    }
  }, []);

  return <div id="temperature-chart" ref={chartRef}></div>;
};

export default TemperatureChart;