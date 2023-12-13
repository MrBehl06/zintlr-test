import React from "react";
import { MdPersonAddAlt1 } from "react-icons/md";
import img from "../../../assets/art.png";
import { MdManageAccounts } from "react-icons/md";
import { Link } from "react-router-dom";

const ConsumerSectionHeader1 = ({ props }) => {
  const check1 = props.ButtonText2;
  const check2 = props.SubText;
  return (
    <div className=" flex justify-between items-center w-[28rem] bg-sky-100 p-3 rounded-md">
      <div>
        <div className="pb-1 text-left">
          <h4
            className={`${
              props.pageId === 1 ? "text-xl text-black" : "text-sky-400 text-sm"
            } color  font-normal`}
          >
            <Link to="/">{props.MainText}</Link>
          </h4>
          {check2 && (
            <p className="text-[10px] text-gray-500">{props.SubText}</p>
          )}
        </div>
        <div className="py-1">
          <h4>{props.MainText2}</h4>
        </div>
        <div className=" flex items-start justify-between">
          <button className="flex justify-evenly w-[140px] mr-1 items-center text-[10px] text-white bg-slate-800 p-2 rounded-md">
            <MdPersonAddAlt1 />
            <h4 className="px-1">{props.ButtonText1}</h4>
          </button>
          {check1 && (
            <button className="flex justify-evenly w-[140px] ml-1 items-center text-[10px] border-black border-[1px] text-black p-2 rounded-md">
              <MdManageAccounts />
              <Link to={`${props.Link}`} className="px-1">
                {props.ButtonText2}
              </Link>
            </button>
          )}
        </div>
      </div>
      <div>
        <img src={img} className="w-40 h-auto" alt="" />
      </div>
    </div>
  );
};

export default ConsumerSectionHeader1;
// echo "# test" >> README.md
//   git init
//   git add README.md
//   git commit -m "first commit"
//   git branch -M main
//   git remote add origin https://github.com/MrBehl06/test.git
//   git push -u origin main
