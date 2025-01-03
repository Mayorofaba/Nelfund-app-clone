import Menus from "../../sideBarMenuComponents/sidebarData";
import SideBar from "./sideBar";
import { useState } from "react";
import "./sideBar.css";
import { FaSortUp } from "react-icons/fa";
import { FaSortDown } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function HeaderAndMenu() {
  const [checkArrow, setCheckArrow] = useState(false);

  const changeArrow = () => {
    setCheckArrow(!checkArrow);
  };

  return (
    <div className="headerAndMenu bg-white z-10">
      {/* header starts */}
      <div className="header">
        <Link to="/dashboard/home">
          <div className="logo">
            <img
              src="https://portal.nelf.gov.ng/assets/NELFUND_Logo.svg"
              alt="logo"
            />{" "}
          </div>
        </Link>

        <div className="right">
          <div className="user m-[1em] ">
            <div className="username">Micheal Chinedu Nwabuko</div>
            <div className="useremail">michealNwabuko@gmail.com</div>
          </div>

          <div onClick={() => changeArrow()} className="arrow">
            {checkArrow ? <FaSortUp /> : <FaSortDown />}
          </div>

          <div onClick={() => changeArrow()} className="headerDrop">
            {checkArrow && <SideBar Menu={Menus} />}
          </div>
        </div>
      </div>
    </div>
  );
}
