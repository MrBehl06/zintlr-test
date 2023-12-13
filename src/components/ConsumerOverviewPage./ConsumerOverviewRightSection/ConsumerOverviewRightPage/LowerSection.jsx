import React from "react";
import TransactionBarGraph from "../Graphs/TransactionBarGraph";
import ConsumerOverviewWeeksButtons from "../../ConsumerOverviewWeeksButtons";
const LowerSection = () => {
  return (
    <div className="border-[1px] rounded-xl shadow-md border-gray-100 p-3 ">
      <div className="">
        <div>
          <div>5 Greatest Transactions</div>
        </div>
        <ConsumerOverviewWeeksButtons />
      </div>
      <TransactionBarGraph />
    </div>
  );
};

export default LowerSection;
