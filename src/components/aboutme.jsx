import React from "react";

function Aboutme() {
  return (
    <div className="flex  gap-5 items-center max-w-60xl p-10  bg-white rounded-lg border-b-2 ">
      <div>
        <img
          src="/myself.jpg"
          alt="user"
          style={{ borderRadius: "50%", objectFit: "cover" }}
          width="200px"
          height="400px"
        />
      </div>
      <div>
        <h1 className="  font-extrabold ">Micheal Chinedu Nwabuko</h1>
        <h3>Male | September 23rd 2000 </h3>
      </div>
    </div>
  );
}

export default Aboutme;
