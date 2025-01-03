import React from "react";
import userData from "../../components/userdata/userdata.json";

function Resetpassword() {
  const Data = userData;

  return (
    <div className="w-[70vw] max-w-[32em] mx-auto mt-5 flex flex-col gap-y-12">
      <div className="w-full flex flex-col gap-4 ">
        <div className="w-full  flex flex-col gap-y-5 bg-white rounded-lg ">
          <div className="px-10 mt-10 ">
            <h1 className="  text-3xl font-bold ">Reset Password</h1>
          </div>
          <div className="px-10 mb-3">
            <p className="text-md">
              Kindly Enter the email address you signed up with
            </p>
          </div>
          <form
            bindsubmit="submitForm"
            className="w-full flex flex-col gap-y-5 px-10 "
          >
            <div className="mb-3">
              <label
                for="email"
                className="block text-gray-700 text-sm font-bold mb-2"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={Data.contactDetails.emailAddress}
                placeholder="name@example.com"
                required
                className="shadow bg-white appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-2 focus:border-green-600 focus:ring-green-600"
              />
            </div>

            <button
              type="submit"
              className="bg-green-700  hover:bg-green-700 mb-10 text-white font-bold py-2 px-4 rounded-md focus:outline-none focus:shadow-outline"
            >
              Reset Password
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Resetpassword;
