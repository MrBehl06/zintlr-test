import React from "react";
import { Line } from "react-chartjs-2";
import Chart from "chart.js/auto";
const LineGraphSingleConsumerPage = () => {
  const chartData = {
    labels: ["Mon", "Tue", "Wed", "Thur", "Fri", "Sat", "Sun"],
    datasets: [
      {
        label: "Values",
        data: [400, 220, 700, 200, 250, 810, 400],
        fill: false,
        tension: 0.001, // Adjust the line tension (curvature)
        borderColor: "rgba(0,0,255,1)", // Blue color
        pointRadius: 0, // Remove dots
      },
    ],
  };

  const chartOptions = {
    plugins: {
      legend: {
        display: false, // Hide legend
      },
      tooltip: {
        enabled: false, // Disable tooltip
      },
    },
    scales: {
      x: {
        beginAtZero: true,
        grid: {
          borderDash: [3, 3], // Make x-axis grid lines dotted
        },
      },
      y: {
        beginAtZero: true,
        max: 1000, // Adjust the maximum value on the y-axis
        stepSize: 200, // Adjust the step size on the y-axis
      },
    },
  };

  const containerStyle = {
    width: "55%",
    height: "200px",
  };

  return (
    <div style={containerStyle}>
      <Line data={chartData} options={chartOptions} />
    </div>
  );
};

export default LineGraphSingleConsumerPage;
