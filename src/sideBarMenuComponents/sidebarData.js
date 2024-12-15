import { FaThLarge, FaUser, FaWrench, FaDollarSign, FaSun, FaUnlock } from "react-icons/fa"

// ,FaThLarge, FaEuroSign, FaUser, FaWrench, FaSun, FaMoon, FaScrewdriver,FaPlus, FaMinus


export const Menus = [
    {
        Label: [< FaThLarge color="green" className="icon" />, "Home"],
        to: "/",
    },

    {
        Label: [< FaDollarSign color="green" className="icon" />, "Loan"],
        to: "/stepone",
    },

    {
        Label: [<FaUser color="green" className="icon" />, "Profile"],
        to: "",
        children: [
            {
                Label: "Nwabuko MIcheal",
                to: ""
            }
        ],
    },
    {
        Label: [<FaWrench color="green" className="icon" />, "Settings"],
        to: "",
        children: [
            {
                Label: [< FaSun color="green" className="icon" />, " Change Theme"],
                to: ""
            },
            {
                Label: [< FaUnlock color="green" className="icon" />, "Change Password"],
                to: ""
            },



        ],
    },

]

export default Menus;