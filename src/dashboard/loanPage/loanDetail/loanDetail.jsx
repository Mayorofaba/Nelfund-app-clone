import React from "react";
import LoanDetailCard from "../../../components/loanDetailCard";
import { FaFileDownload } from "react-icons/fa";
// import html2pdf from 'html2pdf.js';

export default function WhyChooseUs() {
  const loanData = [
    {
      title: "Student Name",
      description: "Nwabuko Micheal",
    },
    {
      title: "Higher Institution",
      description: "University of Nigeria, Nsukka",
    },
    {
      title: "Loan Status",
      description: "Pending",
    },
    {
      title: "Disbursement Status",
      description: "Pending",
    },
    {
      title: "Academic session",
      description: "2023-2024",
    },
    {
      title: "Loan type",
      description: "Upkeep/Personal fee",
    },
    {
      title: "Remark",
      description: "Nil",
    },
  ];

  async function handledownload() {
    const html2pdf = await require("html2pdf.js");
    const element = document.querySelector("#downloadable");
    html2pdf(element);
  }

  return (
    <div className=" loanDetail pt-16 pl-[9.4em] mt-10 mr-10 w-[80vw] ">
      <h1 className="text-2xl w-fit p-3 rounded-3xl font-bold text-start ml-20 hover:shadow-gray-300 hover:cursor-pointer  hover:shadow-lg ">
        Loan Details
      </h1>

      <div
        id="downloadable"
        className="  w-full h-max ml-20  border gap-y-6 mx-auto items-center justify-center  max-w-[70em] mt-10 rounded-3xl"
      >
        <div className="w-full flex justify-between px-4 ">
          <div className="w-full flex basis-2/3 flex-wrap items-center justify-center gap-4">
            {loanData.map((loan, index) => (
              <LoanDetailCard
                key={index}
                title={loan.title}
                description={loan.description}
              />
            ))}
          </div>

          <div
            className="download h-fit mt-14 p-10 mr-10 hover:shadow-gray-300 hover:cursor-pointer  hover:shadow-lg "
            data-html2canvas-ignore
          >
            <FaFileDownload color="green" size={50} onClick={handledownload} />
          </div>
        </div>
        {/* total loan amont*/}
        <div className="bg-green-950 h-20 text-white ">
          <h2 className="text-4xl font-bold text-start pl-20 pt-5 ">240,000</h2>
        </div>
      </div>
    </div>
  );
}
