// import { useState } from "react";
// import Menus from "./sideBarMenuComponents/sidebarData";
import { FaDollarSign } from "react-icons/fa";
import { Link } from "react-router-dom";
// import Layout from "./components/layout";
import React from "react";

export default function LandingPage() {
  return (
    <div className=" removedesktopmargin  max-w-screen-lg mx-auto mt-16 ml-[9.4em] p-4 ">
      {/* pageview */}

      <div className="pageview ">
        <Link to="/dashboard/loans/application">
          <h2 className="requestbtn mx-auto">Request for Student Loan</h2>
        </Link>
      </div>

      {/* welcome message */}
      <div className="text-start mb-8">
        <h2 className="text-2xl font-bold">
          Welcome to the Student Loan Portal, Micheal
        </h2>
      </div>

      {/* the loan detail */}
      <div className=" moreinfo flex flex-wrap justify-around mt-[5em] mb-[6em]">
        {/* amount */}
        <div className="flex flex-col items-center border bg-white p-4 m-1 w-full md:w-1/3 rounded-lg">
          <div className="flex justify-between w-full items-center mb-4">
            <div>
              <h2 className="text-xl font-semibold">Total Loan Amount</h2>
              <h1 className="text-3xl font-bold">$330,750</h1>
            </div>
            <div>
              <FaDollarSign className=" image text-4xl" />
            </div>
          </div>
        </div>

        {/* balance date */}
        <div className="flex flex-col items-center border bg-white p-4 m-2 w-full md:w-1/3 rounded-lg">
          <div className="flex justify-between w-full items-center mb-4">
            <div>
              <h2 className="text-xl font-semibold">Balance Date</h2>
              <h1 className="text-3xl font-bold">N/A</h1>
            </div>
            <div>
              <FaDollarSign className=" image text-4xl" />
            </div>
          </div>
        </div>

        {/* Amount Repaid */}
        <div className="flex flex-col items-center border bg-white p-4 m-2 w-full md:w-1/3 rounded-lg">
          <div className="flex justify-between w-full items-center mb-4">
            <div>
              <h2 className="text-xl font-semibold">Amount Repaid</h2>
              <h1 className="text-3xl font-bold">$0</h1>
            </div>
            <div>
              <FaDollarSign className=" image text-4xl" />
            </div>
          </div>
        </div>
      </div>
      {/* end of loan details */}

      {/* begin of faq */}
      <div className=" moreinfo flex flex-wrap justify-around bg-gray-100 ">
        {/* faq 1 */}
        <div className=" info bg-green-600 h-[20em] p-4 m-2 w-full sm:w-1/3 rounded-lg text-center">
          <h2 className="text-xl text-white font-bold mb-2">How to Apply?</h2>
          <p className="mb-4 text-white ">
            Learn more on how to apply for student's loan with a few clicks
          </p>
          <h4 className="text-white">Get Started</h4>
        </div>

        {/* faq 2 */}
        <div className=" info bg-green-600  h-[20em] p-4 m-2 w-full sm:w-1/3  rounded-lg text-center">
          <h2 className="text-xl text-white font-bold mb-2">FAQs</h2>
          <p className="mb-4">
            Read about most frequently asked questions about the NG student
            loans
          </p>
          <Link to="/FAQs">
            <h4 className="text-white">Read FAQs</h4>
          </Link>
        </div>

        {/* faq 3 */}
        <div className=" info bg-green-600 h-[20em] p-4 m-2 w-full sm:w-1/3  rounded-lg text-center">
          <h2 className="text-xl text-white font-bold mb-2">
            Help And Support
          </h2>
          <p className="mb-4">
            Browse helpful topics and articles to help you navigate your
          </p>
          <Link to="/FAQs">
            <h4 className="text-white">Get in Touch</h4>
          </Link>
        </div>
      </div>
      {/* end of faq */}
    </div>
  );
}
