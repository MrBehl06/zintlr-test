import React from "react";
import { Bar } from "react-chartjs-2";

const RevenueBarGraph = () => {
  const data = {
    labels: ["1", "2", "3", "4", "5"],
    datasets: [
      {
        label: "Revenue",
        data: [380, 450, 300, 350, 100],
        backgroundColor: "rgb(43, 44, 170)", // Change the color to indigo
        barPercentage: 1, // Adjust the width of the bars
        categoryPercentage: 0.8, // Adjust the spacing between bars
      },
      {
        label: "Transaction Amount",
        data: [150, 300, 500, 350, 250],
        backgroundColor: "rgba(3, 138, 255)", // Change the color to dodger blue
        barPercentage: 1, // Adjust the width of the bars
        categoryPercentage: 0.8, // Adjust the spacing between bars
      },
    ],
  };

  // Chart options
  const options = {
    scales: {
      y: {
        title: {
          display: true,
          text: "Amount",
          position: "top",
        },
        ticks: {
          stepSize: 200,
          beginAtZero: true,
          max: 1000,
        },
      },
    },
    plugins: {
      legend: {
        position: "top",
        labels: {
          color: "black", // Change the color of the legend labels
          usePointStyle: true, // Display legend labels as points
          boxWidth: 10, // Set the width of the legend label box
        },
      },
    },
    maintainAspectRatio: false, // Set to false to allow custom height
    responsive: true,
  };

  // Set the width and height of the chart canvas
  const chartWidth = 320;
  const chartHeight = 300; // Adjust the height as needed

  return (
    <div style={{ width: chartWidth, height: chartHeight }}>
      <Bar data={data} options={options} />
    </div>
  );
};

export default RevenueBarGraph;
