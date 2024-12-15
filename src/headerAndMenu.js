import Menus from "./sideBarMenuComponents/sidebarData";
import SideBar from "./sideBar";
import { useState } from 'react';
import './sideBar.css'
import { FaSortUp } from "react-icons/fa";
import { FaSortDown } from 'react-icons/fa';


export default function HeaderAndMenu() {


    const [checkArrow, setCheckArrow] = useState(false)

    // const [showNavMenu, setShowNaveMenu] = useState(true)

    const changeArrow = () => {
        setCheckArrow(!checkArrow)
    }

    return (

        <div className="headerAndMenu">
            {/* header starts */}
            <div className="header">
                <div className="logo"><img src="https://portal.nelf.gov.ng/assets/NELFUND_Logo.svg" alt="logo" />  </div>


                <div className="right">


                    <div className="user m-[1em] ">

                        <div className="username">Micheal Chinedu Nwabuko</div>
                        <div className="useremail">michealNwabuko@gmail.com</div>
                    </div>


                    <div onClick={() => changeArrow()} className="arrow">
                        {checkArrow ? <FaSortDown /> : <FaSortUp />}

                    </div>


                    <div onClick={() => changeArrow()} className="headerDrop">

                        {checkArrow && <SideBar Menu={Menus} />}

                    </div>


                </div>


            </div>



        </div>




    );
}
