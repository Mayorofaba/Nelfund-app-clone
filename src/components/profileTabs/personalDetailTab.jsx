import React from "react";
import userData from "../userdata/userdata.json";

function PersonalDetailTab() {
  const Data = userData;
  return (
    <div>
      <div className="flex m-10 gap-10  ">
        <div className="flex flex-col w-1/2 ">
          <p className="font-bold" id="my-label">
            First Name
          </p>
          <div className="border p-4 rounded-lg " aria-labelledby="my-label">
            {Data.personalDetails.firstName}
          </div>
        </div>

        <div className="flex flex-col w-1/2">
          <p className="font-bold" id="my-label">
            Last Name
          </p>
          <div className="border  p-4 rounded-lg " aria-labelledby="my-label">
            {Data.personalDetails.lastName}
          </div>
        </div>
      </div>

      {/* second line */}

      <div className="flex m-10 gap-10 ">
        <div className="flex flex-col w-1/2  ">
          <p className="font-bold" id="my-label">
            Middle Name
          </p>
          <div className="border  p-4 rounded-lg " aria-labelledby="my-label">
            {Data.personalDetails.middleName}
          </div>
        </div>

        <div className="flex flex-col w-1/2">
          <p className="font-bold" id="my-label">
            Gender
          </p>
          <div className="border  p-4 rounded-lg " aria-labelledby="my-label">
            {Data.personalDetails.gender}
          </div>
        </div>
      </div>

      {/* third line */}
      <div className="flex m-10 gap-10  ">
        <div className="flex flex-col w-1/2 ">
          <p className="font-bold" id="my-label">
            Date of Birth
          </p>
          <div className="border p-4 rounded-lg " aria-labelledby="my-label">
            {Data.personalDetails.dateOfBirth}
          </div>
        </div>
      </div>
    </div>
  );
}

export default PersonalDetailTab;
