import React from "react";

import CustomerSale from "./RightSection/CustomerSale";
import TotalConsumer from "./LeftSection/TotalConsumer";
const ConsumerAndCustomer = () => {
  return (
    <div className="flex rounded-xl shadow-sm border-gray-100 border-[1px] w-fit my-1 justify-between items-center">
      <div>
        <TotalConsumer />
      </div>
      <div className="flex  justify-between p-2 text-xs items-center">
        <div className="">
          <CustomerSale
            props={{ id: 1, type: "Direct Consumer", count: "342" }}
          />
          <CustomerSale
            props={{ id: 2, type: "Through Associates", count: "300" }}
          />
        </div>
        <div>
          <CustomerSale
            props={{ id: 3, type: "Direct Field Consumer", count: "400" }}
          />
          <CustomerSale
            props={{ id: 4, type: "Through Sales Associates", count: "300" }}
          />
        </div>
      </div>
    </div>
  );
};

export default ConsumerAndCustomer;
