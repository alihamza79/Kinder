import React, { useEffect, useState } from "react";
import ReactApexChart from "react-apexcharts";
const RadialBarChart = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prevProgress) => {
        if (prevProgress >= 75) {
          clearInterval(interval);
          return 75;
        }
        return prevProgress + 1;
      });
    }, 30);

    return () => clearInterval(interval);
  }, []);

  const options = {
    chart: {
      id: "circular-progress",
      sparkline: {
        enabled: true,
      },
    },
    plotOptions: {
      radialBar: {
        startAngle: -90,
        endAngle: 270,
        hollow: {
          margin: 0,
          size: "70%",
          background: "transparent",
          image: undefined,
        },
        track: {
          background: "#f2f2f2",
          strokeWidth: "97%",
          margin: 0,
        },
        dataLabels: {
          show: false,
        },
      },
    },
    fill: {
      type: "gradient",
      gradient: {
        shade: "dark",
        type: "horizontal",
        shadeIntensity: 0.5,
        gradientToColors: ["#00a8ff"], // Change to the desired color (e.g., #00a8ff for blue)
        inverseColors: true,
        opacityFrom: 1,
        opacityTo: 1,
        stops: [0, 75], // Change the stop value to 75 to set the blue color at 75%
      },
    },
    series: [progress],
  };

  return (
    <div className="circular-progress-bar">
      <ReactApexChart options={options} series={options.series} type="radialBar" />
    </div>
  );
};

export default RadialBarChart;
// import "./RadialBarChart.css"; // Import the CSS file for styling
// const RadialBarChart = () => {
//   const [progress, setProgress] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setProgress((prevProgress) => {
//         if (prevProgress >= 75) {
//           clearInterval(interval);
//           return 75;
//         }
//         return prevProgress + 1;
//       });
//     }, 30);

//     return () => clearInterval(interval);
//   }, []);

//   const options = {
//     chart: {
//       id: "circular-progress",
//       sparkline: {
//         enabled: true,
//       },
//     },
//     plotOptions: {
//       radialBar: {
//         startAngle: -90,
//         endAngle: 270,
//         hollow: {
//           margin: 0,
//           size: "70%",
//           background: "transparent",
//           image: undefined,
//         },
//         track: {
//           background: "#f2f2f2",
//           strokeWidth: "97%",
//           margin: 0,
//         },
//         dataLabels: {
//           show: false,
//         },
//       },
//     },
//     fill: {
//       type: "gradient",
//       gradient: {
//         shade: "dark",
//         type: "horizontal",
//         shadeIntensity: 0.5,
//         gradientToColors: ["#3498db"],
//         inverseColors: true,
//         opacityFrom: 1,
//         opacityTo: 1,
//         stops: [0, 100],
//       },
//     },
//     series: [progress],
//   };

//   return (
//     <div className="circular-progress-bar">
//       {" "}
//       <ReactApexChart
//         options={options}
//         series={options.series}
//         type="radialBar"
//       />
//       {" "}
//     </div>
//   );
// };

// export default RadialBarChart;
