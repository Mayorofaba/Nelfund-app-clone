import React from "react";
import userData from "../userdata/userdata.json";

function ContactDetailTab() {
  const Data = userData;
  return (
    <div>
      <div className="flex m-10 gap-10  ">
        <div className="flex flex-col w-1/2 ">
          <p className="font-bold" id="my-label">
            Email Address
          </p>
          <div className="border p-4 rounded-lg " aria-labelledby="my-label">
            {Data.contactDetails.emailAddress}
          </div>
        </div>

        <div className="flex flex-col w-1/2">
          <p className="font-bold" id="my-label">
            Phone Number
          </p>
          <div className="border  p-4 rounded-lg " aria-labelledby="my-label">
            {Data.contactDetails.phoneNumber}
          </div>
        </div>
      </div>

      {/* second line */}

      <div className="flex m-10 gap-10 ">
        <div className="flex flex-col w-1/2  ">
          <p className="font-bold" id="my-label">
            State of Origin
          </p>
          <div className="border  p-4 rounded-lg " aria-labelledby="my-label">
            {Data.contactDetails.stateOfOrigin}
          </div>
        </div>

        <div className="flex flex-col w-1/2">
          <p className="font-bold" id="my-label">
            local Government Area of Origin
          </p>
          <div className="border  p-4 rounded-lg " aria-labelledby="my-label">
            {Data.contactDetails.localGovernmentOfOrigin}
          </div>
        </div>
      </div>

      {/* third line */}
      <div className="flex m-10 gap-10  ">
        <div className="flex flex-col w-full ">
          <p className="font-bold" id="my-label">
            Full residential Address
          </p>
          <div className="border p-4 rounded-lg " aria-labelledby="my-label">
            {Data.contactDetails.fullResidentialAddress}
          </div>
        </div>
      </div>

      {/* fourth line */}

      <div className="flex m-10 gap-10 ">
        <div className="flex flex-col w-1/2  ">
          <p className="font-bold" id="my-label">
            state of residence
          </p>
          <div className="border  p-4 rounded-lg " aria-labelledby="my-label">
            {Data.contactDetails.stateOfResidence}
          </div>
        </div>

        <div className="flex flex-col w-1/2">
          <p className="font-bold" id="my-label">
            Local Government Area of Residence
          </p>
          <div className="border  p-4 rounded-lg " aria-labelledby="my-label">
            {Data.contactDetails.localGovernmentOfResidence}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactDetailTab;
