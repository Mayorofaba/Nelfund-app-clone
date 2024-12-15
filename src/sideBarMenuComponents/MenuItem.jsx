import { useState } from "react";
import Menulist from "./MenuList";
// import { FaPlus, FaMinus,   } from "react-icons/fa"

// ,FaThLarge, FaEuroSign, FaUser, FaWrench, FaSun, FaMoon, FaScrewdriver

export default function MenuItem({ item }) {

    const [displayCurrentChildren, setDisplayCurrentChildren]
        = useState({});


    const handleToggleChildren = (getCurrentLabel) => {
        setDisplayCurrentChildren({
            ...displayCurrentChildren,
            [getCurrentLabel]: !displayCurrentChildren[getCurrentLabel]
        })
    }


    return (

        <li >
            <div className="menuItem">
                <p style={{ alignItems: "center", display: "flex", gap: "0.5em", width: "20em", marginTop: "3em" }} onClick={() => handleToggleChildren(item.Label)}>{item.Label}</p>


                {/* to add the + and - sign */}



                {/* {item && item.children && item.children.length
                    // ? <span onClick={() => handleToggleChildren(item.Label)} >


                        // {
                        //     displayCurrentChildren[item.label] ? <FaMinus /> : <FaPlus />

                        // }


                    // </span> : null

                } */}

            </div>

            <div className={item && item.children && item.children.length > 0
                && displayCurrentChildren[item.Label] ? 'large-height' : 'small-height'}>

                {


                    item && item.children && item.children.length > 0
                        && displayCurrentChildren[item.Label]
                        ? (<Menulist list={item.children} />) : null


                }

            </div>

        </li >

    )

}


