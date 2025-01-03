import {
  FaThLarge,
  FaUser,
  FaWrench,
  FaDollarSign,
  FaArrowAltCircleRight,
} from "react-icons/fa";
import { Link } from "react-router-dom";

import React from "react";

export default function SideBar() {
  return (
    <div className=" flex flex-col h-[85vh] justify-between min-w-[9.4em] border-r ">
      <div className="menu">
        <h2 className=" m-[1em]  font-semibold ">Menu</h2>

        {/* menus */}
        <div className=" mt-0 justify-center items-center  ">
          <Link to="/dashboard/home">
            {" "}
            <div className="home side flex justify-center items-center  ">
              {" "}
              <FaThLarge color="green" /> <h1>Home</h1>
            </div>
          </Link>
          <Link to="/dashboard/loans">
            {" "}
            <div className="loans side flex justify-center items-center  ">
              {" "}
              <FaDollarSign color="green" /> <h1>Loans</h1>{" "}
            </div>{" "}
          </Link>
          <Link to="/dashboard/profile">
            {" "}
            <div className="Profile side flex justify-center items-center ">
              {" "}
              <FaUser color="green" /> <h1>Profile</h1>{" "}
            </div>{" "}
          </Link>
          <Link to="/dashboard/setting">
            {" "}
            <div className="setting side flex justify-center items-center  ">
              {" "}
              <FaWrench color="green" /> <h1>Settings</h1>{" "}
            </div>{" "}
          </Link>
        </div>
      </div>

      <button
        style={{
          alignItems: "center",
          display: "flex",
          gap: "0.5em",
          bottom: "1em",
          marginLeft: "1em",
        }}
      >
        {" "}
        <FaArrowAltCircleRight />
        <h2>Logout</h2>{" "}
      </button>
    </div>
  );
}
