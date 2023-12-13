import React from "react";
import ConsumerOverviewWeeksButtons from "../../../ConsumerOverviewWeeksButtons";

const ConsumerAnalysisTabs = () => {
  return (
    <div class="text-xs flex w-[750px] justify-between items-center  font-medium text-center  text-gray-800 ">
      <ul class="flex flex-wrap -mb-px">
        <li class="me-1">
          <a
            href="#"
            class="inline-block p-2  text-blue-600 border-b-2 border-blue-600 rounded-t-lg active "
          >
            Acounts
          </a>
        </li>
        <li class="me-1">
          <a
            href="#"
            class="inline-block p-2  border-b-2 border-transparent rounded-t-lg  "
            aria-current="page"
          >
            Stock
          </a>
        </li>
        <li class="me-2">
          <a
            href="#"
            class="inline-block p-2 border-b-2 border-transparent rounded-t-lg "
          >
            Volume
          </a>
        </li>
      </ul>
      <div>
        <ConsumerOverviewWeeksButtons />
      </div>
    </div>
  );
};

export default ConsumerAnalysisTabs;
