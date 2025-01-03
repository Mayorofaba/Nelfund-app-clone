import React from "react";
// import Layout from '../../components/layout'
import Loantable from "../../../components/loantable";
import { Link } from "react-router-dom";

export default function Loans() {
  return (
    // <Layout>
    <div className=" loanpage max-w-screen-3xl mx-auto  mt-16 ml-[9.4em] p-4 ">
      {/* pageview */}
      <div className="pageview ">
        <Link to="/dashboard/loans/application">
          <h2 className="requestbtn mx-auto">Request for Student Loan</h2>
        </Link>
      </div>
      {/* stopt here */}
      {/* welcome message */}
      <div className="text-start mb-8">
        <h2 className="text-2xl font-bold">
          Welcome to the Student Loan Portal, Micheal
        </h2>
      </div>

      {/* the loan detail */}
      <div
        id="loanwrap"
        className=" moreinfo flex flex-wrap justify-around mb-8"
      >
        {/* amount */}
        <div className="flex flex-col items-center bg-white border p-4 m-1 w-full md:w-1/3 rounded-lg">
          <div className="flex justify-between w-full items-center mb-4">
            <div>
              <h2 className="text-xl font-semibold">Total Loans</h2>
              <h1 className="text-3xl font-bold">2</h1>
            </div>
          </div>
        </div>

        {/* balance date */}
        <div className="flex flex-col items-center border bg-white p-4 m-2 w-full md:w-1/3 rounded-lg">
          <div className="flex justify-between w-full items-center mb-4">
            <div>
              <h2 className="text-xl font-semibold">Approved Loans</h2>
              <h1 className="text-3xl font-bold">0</h1>
            </div>
          </div>
        </div>

        {/* Amount Repaid */}
        <div className="flex flex-col items-center border bg-white p-4 m-2 w-full md:w-1/3 rounded-lg">
          <div className="flex justify-between w-full items-center mb-4">
            <div>
              <h2 className="text-xl font-semibold">Pending Loans</h2>
              <h1 className="text-3xl font-bold">2</h1>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center bg-white border p-4 m-2 w-full md:w-1/3 rounded-lg">
          <div className="flex justify-between w-full items-center mb-4">
            <div>
              <h2 className="text-xl font-semibold">Declined Loans</h2>
              <h1 className="text-3xl font-bold">0</h1>
            </div>
          </div>
        </div>
      </div>
      {/* end of loan details */}
      {/* end of load details */}

      {/* starts table */}
      <div className="loantable">
        <Loantable />
      </div>
    </div>
    // </Layout>
  );
}
