import React from 'react'
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Tooltip,
    Legend,
  } from 'chart.js';

  import { Bar } from 'react-chartjs-2';

  ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Tooltip,
    // Legend
  );

  export const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
    },
  };

  const labels = ['6A', '9A', '12P', '3P', '6P', '9P', '12P', '9P'];

//   let width, height, gradient;
// function getGradient(ctx, chartArea, clr1, clr2) {
//   const chartWidth = chartArea.right - chartArea.left;
//   const chartHeight = chartArea.bottom - chartArea.top;
//   if (!gradient || width !== chartWidth || height !== chartHeight) {
//     // Create the gradient because this is either the first render
//     // or the size of the chart has changed
//     width = chartWidth;
//     height = chartHeight;
//     gradient = ctx.createLinearGradient(0, chartArea.bottom, 0, 1);
//     gradient.addColorStop(0, clr1);
//     gradient.addColorStop(1, clr2);
//   }

//   return gradient;
// }

export const data = {
  labels,
  datasets: [
    {
    //   label: 'Dataset 1',
      data: [1, 6, 10, 30, 22, 8, 19, 8],
      backgroundColor: ['#FCBF68', "#9B62F7", "#EA60EA"],
      borderRadius: 5
      // backgroundColor: function(context) {
      //   const chart = context.chart;
      //   const {ctx, chartArea} = chart;

      //   if (!chartArea) {
      //     // This case happens on initial chart load
      //     return;
      //   }
      //   return getGradient(ctx, chartArea, "#E1CDFE", "#9B62F7");
      // }
    },
  ],
};

function SalesBarChart() {
  return (
    <Bar data={data} options={options} />
  )
}

export default SalesBarChart