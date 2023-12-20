import React from "react";
import { MdArrowRightAlt } from "react-icons/md";
import { useMyContext } from "../../../Context/MyContext";

const ConsumerDetail = ({ data }) => {
  const { sharedState, updateSharedState } = useMyContext();

  const handleClick = (newValue) => {
    updateSharedState(!newValue);
  };

  return (
    <>
      {data.map((consumer, index) => (
        <tr key={index}>
          <td className="p-4 text-sky-700 font-bold">
            <a
              href=""
              onClick={(e) => {
                e.preventDefault();
                handleClick(sharedState);
              }}
            >
              {consumer.name}
            </a>
          </td>
          <td className="p-4">
            <div className="text-sm font-bold">{consumer.amount}</div>
            <div className="flex items-center justify-evenly w-[200px] text-[10px]">
              <div className="bg-yellow-200 rounded-full py-1 px-3">
                {consumer.property1}
              </div>
              <div className="bg-gray-400 rounded-full py-1 px-3">
                {consumer.property2}
              </div>
              <div className="bg-sky-200 rounded-full py-1 px-3">
                {consumer.property3}
              </div>
            </div>
          </td>
          <td className="text-sm text-center font-bold">
            {consumer.totalAmount}
          </td>
          <td>
            <div className="flex justify-center items-center">
              <h3
                className={`font-bold rounded-full py-1 text-[9px] px-1 w-[70px] text-center ${
                  consumer.status === "Completed" || consumer.status === "Done"
                    ? "bg-green-100 text-green-600"
                    : consumer.status === "Pending"
                    ? "bg-red-100 text-red-600"
                    : consumer.status === "Rejected"
                    ? "bg-gray-100 text-gray-600"
                    : consumer.status === "In Progress"
                    ? "bg-yellow-100 text-yellow-600"
                    : ""
                }`}
              >
                {consumer.status}
              </h3>
            </div>
          </td>
          <td>
            <div className="flex justify-center items-center">
              <div>
                <h4 className="text-[8px]">{consumer.fieldExecutive.role}</h4>
                <h4 className="text-[14px]">{consumer.fieldExecutive.name}</h4>
              </div>
              <div className="text-sky-400 text-xl">
                <MdArrowRightAlt />
              </div>
              <div>
                <h4 className="text-[8px]">{consumer.associate.role}</h4>
                <h4>{consumer.associate.name}</h4>
              </div>
            </div>
          </td>
          <td>
            <div className="flex justify-center items-center">
              {consumer.region}
            </div>
          </td>
          <td>
            <div className="flex justify-center items-center">
              {consumer.businessType}
            </div>
          </td>
          <td>
            <div className="flex justify-center items-center">
              {consumer.contact}
            </div>
          </td>
        </tr>
      ))}
    </>
  );
};

export default ConsumerDetail;
