import React from "react";
import { Bar } from "react-chartjs-2";

const TransactionBarGraph = () => {
  const data = {
    labels: ["1", "2", "3", "4", "5"],
    datasets: [
      {
        label: "Transaction Amount",
        data: [380, 450, 200, 350, 100],
        backgroundColor: "rgb(249, 105, 14)",
        barPercentage: 0.8,
        categoryPercentage: 0.8,
      },
      {
        label: "Earings",
        data: [50, 60, 60, 60, 60],
        backgroundColor: "rgb(15, 10, 222)",
        barPercentage: 3,
        categoryPercentage: 0.1,
      },
    ],
  };

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

export default TransactionBarGraph;
