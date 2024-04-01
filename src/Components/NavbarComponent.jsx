import { BellRing } from "lucide-react";
import React from "react";
import pf from "../assets/pf.jpg"

const NavbarComponent = () => {
  return (
    <div className=" w-full">
      <div className="navbar">
        <div className="flex-1 ml-24">
          <a className="text-2xl font-bold text-black">Portfolio</a>
        </div>
        <div className="flex-none">
          <div className="dropdown dropdown-end">
            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
              <div className="indicator">
              <BellRing className="text-black"/>
                {/* <span className="badge badge-sm indicator-item">8</span> */}
              </div>
            </div>
            <div
              tabIndex={0}
              className="mt-3 z-[1] card card-compact dropdown-content w-52 bg-base-100 shadow"
            >
            </div>
          </div>
          <div className="dropdown dropdown-end">
            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
              <div className="w-9 rounded-full">
                <img alt="Tailwind CSS Navbar component" src={pf}/>
              </div>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <a className="justify-between">
                  Profile
                  <span className="badge">New</span>
                </a>
              </li>
              <li>
                <a>Settings</a>
              </li>
              <li>
                <a>Logout</a>
              </li>
            </ul>
          </div>
          <div className="px-3">
            <span className="text-black font-bold">Jong Suk</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavbarComponent;
