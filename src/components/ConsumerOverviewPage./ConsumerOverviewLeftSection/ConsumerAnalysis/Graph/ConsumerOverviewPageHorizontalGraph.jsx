import React from "react";
import { Bar } from "react-chartjs-2";

const ConsumerOverviewHorizontalBarGraph = () => {
  // Sample data
  const data = {
    labels: ["Very Active", "Moderately Active", "Active"],
    datasets: [
      {
        data: [3.5, 7, 2.5], // Sample values corresponding to the categories
        backgroundColor: [
          "rgba(45, 85, 255)",
          "rgba(45, 85, 255)",
          "rgba(45, 85, 255)",
          ,
        ],
        barPercentage: 0.5, // Adjust the width of the bars
        categoryPercentage: 0.5, // Adjust the spacing between bars
      },
    ],
  };

  // Chart options
  const options = {
    indexAxis: "y", // Set the axis to be horizontal
    scales: {
      x: {
        ticks: {
          beginAtZero: true,
          max: 11,
        },
      },
    },
    plugins: {
      legend: {
        display: false, // Hide legend
      },
      tooltip: {
        enabled: false, // Disable tooltip
      },
    },
    maintainAspectRatio: false, // Set to false to allow custom height
    responsive: true,
  };

  // Set the width and height of the chart canvas
  const chartWidth = 700;
  const chartHeight = 356;

  return (
    <div style={{ width: chartWidth, height: chartHeight }}>
      <Bar data={data} options={options} />
    </div>
  );
};

export default ConsumerOverviewHorizontalBarGraph;
