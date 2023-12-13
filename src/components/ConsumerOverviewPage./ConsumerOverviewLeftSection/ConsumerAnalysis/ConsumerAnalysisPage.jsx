import React from "react";

import ConsumerAnalysisTabs from "./TabsSection/ConsumerAnalysisTabs";

import { RiArrowDropDownLine } from "react-icons/ri";
import ConsumerOverviewHorizontalBarGraph from "./Graph/ConsumerOverviewPageHorizontalGraph";
const ConsumerAnalysisPage = () => {
  return (
    <div className="rounded-xl shadow-md border-gray-100 border-[1px] p-2 ">
      <div>
        <h3>Consumer Analysis</h3>
      </div>
      <div>
        <div className="flex">
          <div>
            <ConsumerAnalysisTabs />
          </div>
        </div>
        <div className="flex justify-end p-2">
          <button
            className={
              " bg-white border-[1px] border-black w-auto px-2 py-1 text-[10px] m-1 text-black rounded-md "
            }
          >
            <div className="flex justify-between items-center">
              <h3>Filter By Associates</h3>
              <RiArrowDropDownLine className="text-[20px]" />
            </div>
          </button>
          <button
            className={
              " bg-white border-[1px] border-black w-auto px-2 py-1 text-[10px] m-1 text-black rounded-md "
            }
          >
            <div className="flex justify-between items-center">
              <h3>Filter By Zone</h3>
              <RiArrowDropDownLine className="text-[20px]" />
            </div>
          </button>
          <button
            className={
              " bg-white border-[1px] border-black w-auto px-2 py-1 text-[10px] m-1 text-black rounded-md "
            }
          >
            <div className="flex justify-between items-center">
              <h3>Filter By Account Type</h3>
              <RiArrowDropDownLine className="text-[20px]" />
            </div>
          </button>
        </div>
        <div>
          <ConsumerOverviewHorizontalBarGraph />
        </div>
      </div>
    </div>
  );
};

export default ConsumerAnalysisPage;
