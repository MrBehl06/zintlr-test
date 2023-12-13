import React from "react";

import LowerSection from "../ConsumerOverviewRightPage/LowerSection";
import UpperSection from "../ConsumerOverviewRightPage/UpperSection";

const ConsumerOverviewGraphSection = () => {
  return (
    <div>
      <div className=" m-1 border-gray-200">
        <UpperSection />
      </div>
      <div className=" m-1 mt-2 border-gray-200">
        <LowerSection />
      </div>
    </div>
  );
};

export default ConsumerOverviewGraphSection;
