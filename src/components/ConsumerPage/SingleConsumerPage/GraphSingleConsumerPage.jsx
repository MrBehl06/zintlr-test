import React from "react";
import HorizontalGraphSingleConsumerPage from "./Graphs/HorizontalGraphSingleConsumerPage";
import LineGraphSingleConsumerPage from "./Graphs/LineGraphSingleConsumerPage";

const GraphSingleConsumerPage = () => {
  const containerStyle = "flex  justify-between ";
  return (
    <div className={containerStyle}>
      <LineGraphSingleConsumerPage />
      <HorizontalGraphSingleConsumerPage />
    </div>
  );
};

export default GraphSingleConsumerPage;
