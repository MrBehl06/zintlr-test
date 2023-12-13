import React from "react";
import RevenueBarGraph from "../Graphs/RevenueBarGraph";
import ConsumerOverviewWeeksButtons from "../../ConsumerOverviewWeeksButtons";
import { RiArrowDropDownLine } from "react-icons/ri";

const UpperSection = () => {
  return (
    <div className="border-[1px] rounded-xl shadow-md border-gray-100 p-3 ">
      <div className=" ">
        <div className="flex justify-between items-center">
          <div>Highest Revenue Earned</div>
          <button
            className={
              " bg-white border-[1px] border-black w-auto px-2 py-1 text-[10px] m-1 text-black rounded-md "
            }
          >
            <div className="flex jusitfy-center items-center">
              <h4> Top 5</h4>
              <RiArrowDropDownLine className="text-[1rem]" />
            </div>
          </button>
        </div>
        <ConsumerOverviewWeeksButtons />
      </div>
      <RevenueBarGraph />
    </div>
  );
};

export default UpperSection;
