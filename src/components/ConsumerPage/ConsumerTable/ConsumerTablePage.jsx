// Consumer.js
import React, { useState, useEffect } from "react";
import { TableDropdownContent } from "../../../constants/TableDropdownContent";
import Dropdown from "./Dropdown";
import ConsumerDetail from "./ConsumerDetail";
import Pagination from "./Pagination";
import { SampleConsumerData } from "../../../constants/SampleConsumerData";
import { useMyContext } from "../../../Context/MyContext";
import KYCDropdown from "./KYCDropdown";

const Consumer = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  // SearchData Logic
  const { searchTerm, sharedState } = useMyContext();

  // KYC Status Logic
  const [selectedStatus, setSelectedStatus] = useState([]);

  const handleStatusChange = (status) => {
    // Toggle the selected status
    if (selectedStatus.includes(status)) {
      setSelectedStatus(selectedStatus.filter((s) => s !== status));
    } else {
      setSelectedStatus([...selectedStatus, status]);
    }
  };

  // Filter data based on search term and selected KYC status
  const filteredData = SampleConsumerData.filter(
    (consumer) =>
      consumer.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (selectedStatus.length === 0 || selectedStatus.includes(consumer.status))
  );

  // Updated the current page when the search term changes
  useEffect(() => {
    setCurrentPage(1);
  }, [searchTerm]);

  // Count of Pages
  const totalPages = Math.ceil(filteredData.length / itemsPerPage);

  const handleChangePage = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  //Pagination Logic

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const paginatedData = filteredData.slice(startIndex, endIndex);

  const revenueArr = TableDropdownContent[0];
  const zoneArr = TableDropdownContent[2];
  const accountArr = TableDropdownContent[3];

  return (
    <div>
      <table className="table-auto w-full text-left text-xs font-light">
        <thead className="bg-sky-100">
          <tr>
            <th className="w-[160px] p-4">Consumer Name</th>
            <th className="w-[160px] px-4 py-1">
              <div className="font-bold p-4">Assets</div>
              <div className="flex items-center justify-between w-[200px] text-[10px]">
                <div className="font-light text-sky-700">Total-₹8m</div>
                <div className="bg-yellow-200 rounded-full p-1 px-1">
                  50.42g
                </div>
                <div className="bg-gray-400 rounded-full p-1 px-1">50.42g</div>
                <div className="bg-sky-200 rounded-full p-1 px-1">50.42g</div>
              </div>
            </th>
            <th className="w-[80px]">
              <Dropdown props={revenueArr} />
            </th>
            <th className="w-[100px]">
              <KYCDropdown
                selectedStatus={selectedStatus}
                onStatusChange={handleStatusChange}
              />
            </th>
            <th>Facilitator</th>
            <th>
              <Dropdown props={zoneArr} />
            </th>
            <th>
              <Dropdown props={accountArr} />
            </th>
            <th>TPA</th>
          </tr>
        </thead>
        <tbody>
          <ConsumerDetail data={paginatedData} />
        </tbody>
      </table>
      {!sharedState && (
        <div className="flex justify-center">
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={handleChangePage}
          />
        </div>
      )}
    </div>
  );
};

export default Consumer;
