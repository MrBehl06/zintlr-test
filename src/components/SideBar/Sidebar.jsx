import React from "react";
import logo from "../../assets/logo.png";
import { NavBarInfo } from "../../constants/NavBarInfo";
const Sidebar = () => {
  return (
    <div>
      <aside aria-label="Sidebar">
        <div class="h-full px-3 py-4 overflow-y-auto bg-gray-50 ">
          <div className="flex mt-8 mb-8  ms-3">
            <img src={logo} alt="logo" className="h-8 w-8" />
            <span class="self-center text-xl text-[#6263e8] font-semibold whitespace-nowrap">
              Zintlr
            </span>
          </div>

          <ul class="space-y-2 font-medium">
            {NavBarInfo.map((nav) => {
              return (
                <li key={nav.id}>
                  <a
                    href="#"
                    className="flex items-center p-3 text-gray-900 rounded-full hover:bg-[#29C5F6] hover:text-white group"
                  >
                    <nav.logo />
                    <span className="ms-3">{nav.text}</span>
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </aside>
    </div>
  );
};
export default Sidebar;
