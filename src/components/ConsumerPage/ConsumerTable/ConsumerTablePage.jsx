import React from "react";
import TableDropdownContent from "../../../constants/TableDropdownContent";
import Dropdown from "./Dropdown";
import ConsumerDetail from "./ConsumerDetail";
import Pagination from "./Pagination";

const ConsunerTablePage = () => {
  return <Consumer />;
};
const Consumer = () => {
  const revenueArr = TableDropdownContent[0];
  const kycArr = TableDropdownContent[1];
  const zoneArr = TableDropdownContent[2];
  const accountArr = TableDropdownContent[3];

  return (
    <div>
      <table class="table-auto w-full text-left text-xs font-light ">
        <thead className="bg-sky-100  ">
          <tr>
            <th className="w-[160px] p-4">Consumer Name</th>
            <td className=" w-[160px] px-4 py-1 ">
              <tr className="font-bold p-4">Assets</tr>
              <tr className="flex items-center justify-between w-[200px] text-[10px] ">
                <tr className="font-light text-sky-700 ">Total-₹8m</tr>
                <td className="bg-yellow-200  rounded-full p-1 px-1">50.42g</td>
                <td className="bg-gray-400 rounded-full p-1 px-1">50.42g</td>
                <td className="bg-sky-200 rounded-full p-1 px-1">50.42g</td>
              </tr>
            </td>
            <th className=" w-[80px] ">
              <Dropdown props={revenueArr} />
            </th>
            <th className=" w-[100px] ">
              <Dropdown props={kycArr} />
            </th>
            <th>Facilator</th>
            <th>
              <Dropdown props={zoneArr} />
            </th>
            <th>
              {" "}
              <Dropdown props={accountArr} />
            </th>
            <th>TPA</th>
          </tr>
        </thead>
        <tbody>
          <ConsumerDetail />
          <ConsumerDetail />
          <ConsumerDetail />
          <ConsumerDetail />
        </tbody>
      </table>
      <div className="flex justify-center">
        <Pagination />
      </div>
    </div>
  );
};

export default ConsunerTablePage;
