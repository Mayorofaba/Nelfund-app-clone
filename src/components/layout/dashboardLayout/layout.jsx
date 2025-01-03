import React from "react";
import HeaderAndMenu from "./headerAndMenu";
import SideBar from "./sideBar";

export default function Layout({ children }) {
  return (
    <div className="Dashlayout">
      <div className="fixed z-10 w-full top-0 h-16 ">
        <HeaderAndMenu />
      </div>

      <div className="pageholder flex mx-auto ">
        <div className="removableSidebar top-16 fixed left-0 h-screen overflow-y-auto ">
          <SideBar />
        </div>
        <div>{children}</div>
      </div>
    </div>
  );
}
