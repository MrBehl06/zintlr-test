import React from "react";
import { RiArrowDropDownLine } from "react-icons/ri";
import profilePhoto from "../../../assets/profile.jpeg";

const Profile = () => {
  const imgStyle =
    "rounded-full overflow-hidden w-12 h-12 border-4 border-red-400";
  const parentDivStyle = "flex  items-center  p-2 bg-slate-100 rounded-md ";

  return (
    <div className={parentDivStyle}>
      <div className={imgStyle}>
        <img src={profilePhoto} className="" alt="profile" />
      </div>
      <div>
        <RiArrowDropDownLine style={{ fontSize: "2rem" }} />
      </div>
    </div>
  );
};

export default Profile;
