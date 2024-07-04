import React, { useEffect } from 'react';
import ApexCharts from 'apexcharts';

const RadialPatientsChart = () => {
  useEffect(() => {
    if (document.querySelector('#radial-patients')) {
      const donutChartOptions = {
        chart: {
          height: 290,
          type: 'donut',
          toolbar: {
            show: false,
          },
        },
        plotOptions: {
          bar: {
            horizontal: false,
            columnWidth: '50%',
          },
        },
        dataLabels: {
          enabled: false,
        },
        series: [44, 55],
        labels: ['Male', 'Female'],
        responsive: [
          {
            breakpoint: 480,
            options: {
              chart: {
                width: 200,
              },
              legend: {
                position: 'bottom',
              },
            },
          },
        ],
        legend: {
          position: 'bottom',
        },
      };

      const donut = new ApexCharts(
        document.querySelector('#radial-patients'),
        donutChartOptions
      );

      donut.render();
    }
  }, []);

  return <div id="radial-patients"></div>;
};

export default RadialPatientsChart;
