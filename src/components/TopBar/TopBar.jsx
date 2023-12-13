import React from "react";
import SearchBar from "./LeftSection/SearchBar";
import TopBarIcons from "./RightSection/TopBarIcons";
import GoldPrice from "./RightSection/GoldPrice";
import Profile from "./RightSection/Profile";

const TopBar = () => {
  const dis = "flex justify-center items-center";
  return (
    <div className="flex w-full items-center justify-between ">
      <div className="p-2">
        <SearchBar />
      </div>
      <div className="flex justify-center items-center">
        <div div className="p-2">
          <TopBarIcons />
        </div>
        <div className="p-2">
          <GoldPrice />
        </div>
        <div className="p-2">
          <Profile />
        </div>
      </div>
    </div>
  );
};

export default TopBar;
