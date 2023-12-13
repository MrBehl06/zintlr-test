import React from "react";

const ConsumerOverviewWeeksButtons = () => {
  return (
      <div className="mb-3 mt-3">
        <button
          className={
            " bg-white border-[1px] border-black w-auto px-2 py-1 text-[10px] m-1 text-black rounded-md "
          }
        >
          Past Week
        </button>
        <button
          className={
            " bg-white border-[1px] border-black w-auto px-2 py-1 text-[10px] m-1 text-black rounded-md "
          }
        >
          Past Month
        </button>
        <button
          className={
            " bg-white border-[1px] border-black w-auto px-2 py-1 text-[10px] m-1 text-black rounded-md "
          }
        >
          Past Year
        </button>
        <button
          className={
            " bg-white border-[1px] border-black w-auto px-2 py-1 text-[10px] m-1 text-black rounded-md "
          }
        >
          All time
        </button>
      </div>

  );
};

export default ConsumerOverviewWeeksButtons;
