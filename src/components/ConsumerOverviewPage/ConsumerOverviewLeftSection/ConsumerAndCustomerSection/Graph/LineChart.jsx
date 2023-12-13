import React from "react";
import { Line } from "react-chartjs-2";

const LineChart = () => {
  const data = {
    labels: ["Wed", "Thu", "Fri", "Sat", "Sun", "Mon", "Tue"],
    datasets: [
      {
        data: [250, 500, 700],
        borderColor: "rgba(75,192,192,1)",
        backgroundColor: "rgba(75,192,192,0.2)",
        pointRadius: 1,
        pointHoverRadius: 2,
      },
    ],
  };

  // Chart options
  const options = {
    plugins: {
      legend: {
        display: false, // Hide legend
      },
      tooltip: {
        enabled: false, // Disable tooltip
      },
    },
    scales: {
      y: {
        ticks: {
          stepSize: 200,
          beginAtZero: true,
          max: 700,
        },
      },
      x: {
        ticks: {
          font: {
            size: 10, // Adjust the font size as needed
          },
        },
      },
    },
  };

  const chartWidth = 200;
  const charHeight = 90;

  return (
    <div style={{ width: chartWidth, height: charHeight }}>
      <Line data={data} options={options} />
    </div>
  );
};

export default LineChart;
