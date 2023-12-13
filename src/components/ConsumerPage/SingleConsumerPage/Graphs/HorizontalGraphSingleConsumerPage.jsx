import React from "react";
import { Bar } from "react-chartjs-2";

const HorizontalGraphSingleConsumerPage = () => {
  const chartData = {
    labels: [
      "Buy",
      "Sell",
      "Transfer",
      "Swap",
      "Added to wallet",
      "Withdraw from wallet",
      "Loans",
    ],

    datasets: [
      {
        labels: false,
        backgroundColor: "rgba(135,206,250,0.5)", // Blue Sky color
        borderColor: "rgba(135,206,250,1)", // Blue Sky color
        data: [170, 120, 80, 60, 40, 30, 25],
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
        barPercentage: 0.1, // Adjust the width of individual bars (percentage of the available space)
        categoryPercentage: 0.1, // Adjust the width of the entire category (percentage of the available space)
        beginAtZero: true,
        ticks: {
          stepSize: 50,
          suggestedMax: 200,
        },
        gridLines: {
          display: false, // Turn off vertical grid lines for x-axis
        },
      },
      y: {
        beginAtZero: true,
        ticks: {
          display: true,
        },
      },
    },
    indexAxis: "y",
  };

  const containerStyle = {
    width: "60%", // Adjust the width as needed
    height: "200px", // Adjust the height as needed
  };

  return (
    <div style={containerStyle}>
      <Bar data={chartData} options={chartOptions} />
    </div>
  );
};

export default HorizontalGraphSingleConsumerPage;
