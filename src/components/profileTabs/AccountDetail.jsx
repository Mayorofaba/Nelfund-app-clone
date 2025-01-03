import React from "react";
import userData from "../userdata/userdata.json";

function AccountDetail() {
  const Data = userData;

  const name =
    Data.personalDetails.firstName +
    Data.personalDetails.middleName +
    Data.personalDetails.lastName;

  const asteriskedName = "*".repeat(name.length - 3) + name.slice(-3);

  return (
    <div>
      {/* third line */}
      <div className="flex m-10 gap-10  ">
        <div className="flex flex-col w-full ">
          <p className="font-bold" id="my-label">
            Bank Verification Number
          </p>
          <div>
            <div className="border p-4 rounded-lg " aria-labelledby="my-label">
              {Data.accountDetails.bankAccountNumber}
            </div>

            {/* asterisk name */}
            <h1>{asteriskedName}</h1>
          </div>
        </div>
      </div>

      {/* fourth line */}

      <div className="flex m-10 gap-10 ">
        <div className="flex flex-col w-1/2  ">
          <p className="font-bold" id="my-label">
            Bank Name
          </p>
          <div className="border  p-4 rounded-lg " aria-labelledby="my-label">
            {Data.accountDetails.bankName}
          </div>
        </div>

        <div className="flex flex-col w-1/2">
          <p className="font-bold" id="my-label">
            Bank Account Number
          </p>
          <div className="border  p-4 rounded-lg " aria-labelledby="my-label">
            {Data.accountDetails.bankAccountNumber}
          </div>
        </div>
      </div>
    </div>
  );
}

export default AccountDetail;
