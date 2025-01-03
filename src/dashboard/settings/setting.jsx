import React from "react";
// import Layout from '../components/layout'
import { useState, useEffect } from "react";
// import Menus from "./sideBarMenuComponents/sidebarData";
// import { FaDollarSign } from "react-icons/fa";
// import { Link } from "react-router-dom";
// import Layout from "./components/layout";

export default function Setting() {
  const [isOpen, setIsOpen] = useState(false);
  const [countdown, setCountdown] = useState(5);

  const handleOpen = () => {
    setIsOpen(true);
  };

  useEffect(() => {
    let timer;
    if (isOpen) {
      timer = setInterval(() => {
        setCountdown((prevCountdown) => prevCountdown - 1);
      }, 1500);
    } else {
      clearInterval(timer);
    }
    return () => clearInterval(timer);
  }, [isOpen]);

  useEffect(() => {
    if (countdown === 0) {
      setIsOpen(false);
      setCountdown(5);
    }
  }, [countdown]);

  return (
    <div>
      <div className=" bg-white text-green-500  w-90vw  mt-[12em] ml-[15em] mb-3">
        <h2>Change Password</h2>
      </div>

      <div
        style={{
          width: "100%",
          height: "1px",
          backgroundColor: "gray",
          marginLeft: "15em",
        }}
      />

      <div className=" rounded-md py-3 px-20 justify-center text-white bg-green-500 w-90vw  mt-[2em] ml-[15em] ">
        <button onClick={handleOpen}>Click to Change Password</button>
        {isOpen && (
          <div>
            <div className="absolute top-0 right-0 m-4 bg-white mt-[10em] border border-gray-300 rounded-lg shadow-lg p-4 w-80">
              <div className="text-center">
                <h2 className="text-lg font-bold mb-2">Nelfund</h2>
                <p className="text-gray-600 mb-4">
                  We sent a password reset link to your email
                </p>
              </div>
            </div>
            <div className="absolute top-20 right-0 m-4 bg-green-400 border border-gray-300 rounded-lg shadow-lg  w-80 text-center">
              <h2 className="text-lg font-bold mb-2">Closing in...</h2>
              <h1 className="text-5xl font-bold">{countdown}</h1>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
