import React from "react";
import { MdArrowRightAlt } from "react-icons/md";
import { useMyContext } from "../../../Context/MyContext";
const ConsumerDetail = () => {
  const { sharedState, updateSharedState } = useMyContext();

  const handleClick = (newValue) => {
    // Perform some logic
    if (newValue === false) {
      updateSharedState(true);
    } else {
      updateSharedState(false);
    }
  };
  return (
    <tr>
      <td className="p-4 text-sky-700 font-bold">
        <a
          href=""
          onClick={(e) => {
            e.preventDefault();
            handleClick(sharedState);
          }}
        >
          Raghvendra Raga
        </a>
      </td>
      <td className="p-4">
        <tr className="text-sm font-bold">₹35,342</tr>
        <tr className="flex items-center justify-evenly w-[200px] text-[10px] ">
          <td className="bg-yellow-200 rounded-full py-1 px-3">50.42g</td>
          <td className="bg-gray-400 rounded-full py-1 px-3">50.42g</td>
          <td className="bg-sky-200 rounded-full py-1 px-3">50.42g</td>
        </tr>
      </td>
      <td className="text-sm text-center font-bold">₹35,342</td>
      <td>
        <div className="flex justify-center items-center">
          <h3 className="bg-green-100 text-green-600 font-bold rounded-full py-1 px-1 w-[70px] text-center">
            Done
          </h3>
        </div>
      </td>
      <td>
        <div className="flex justify-center items-center">
          <div>
            <h4 className="text-[8px]">B2B Field Executive</h4>
            <h4 className="text-[14px]">Arun Jha</h4>
          </div>
          <div className="text-sky-400 text-xl">
            <MdArrowRightAlt />
          </div>
          <div>
            <h4 className="text-[8px]">Associate</h4>
            <h4>Anika Singh</h4>
          </div>
        </div>
      </td>
      <td>
        <div className="flex justify-center items-center">South</div>
      </td>
      <td>
        <div className="flex justify-center items-center">Business</div>
      </td>
      <td>
        <div className="flex justify-center items-center">
          9876543210@trucard
        </div>
      </td>
    </tr>
  );
};

export default ConsumerDetail;
