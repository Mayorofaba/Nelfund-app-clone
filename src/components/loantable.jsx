import React, { useState } from "react";
import DataTable from "react-data-table-component";
import { Link } from "react-router-dom";

export default function Loantable() {
  const columns = [
    {
      name: "Tracking ID",
      selector: (row) => row.id,
      sortable: true,
    },

    {
      name: "Date",
      selector: (row) => row.date,
      sortable: true,
    },
    {
      name: "Status",
      selector: (row) => row.status,
      sortable: true,
    },
    {
      name: "loanType",
      selector: (row) => row.loanType,
      sortable: true,
    },
    {
      name: "Action",
      selector: (row) => row.action,
      sortable: true,
    },
  ];

  const data = [
    {
      id: 1,
      name: "Micheal",
      email: "michealnwabuko@gmail.com",
      age: "25",
      date: "Fri, jun 7th 2024",
      status: "pending",
      loanType: "institutional",
      action: (
        <Link to="/dashboard/loans/details">
          <button className="border p-2 rounded-md ">View</button>
        </Link>
      ),
    },
    {
      id: 2,
      name: "iceprince",
      email: "ice@gmail.com",
      age: "20",
      date: "Thur, Feb 2nd 2022",
      status: "successful",
      loanType: "upkeep",
      action: (
        <Link to="/dashboard/loans/details">
          <button className="border p-2 rounded-md ">View</button>
        </Link>
      ),
    },
    {
      id: 3,
      name: "Angela",
      email: "angela@gmail.com",
      age: "17",
      date: "Tue, Jan 20th 2024",
      status: "failed",
      loanType: "institutional",
      action: (
        <Link to="/dashboard/loans/details">
          <button className="border p-2 rounded-md ">View</button>
        </Link>
      ),
    },
    {
      id: 4,
      name: "cheta",
      email: "cheta@gmail.com",
      age: "19",
      date: "Sat, Sept 19th 2021",
      status: "successful",
      loanType: "upkeep",
      action: (
        <Link to="/dashboard/loans/details">
          <button className="border p-2 rounded-md ">View</button>
        </Link>
      ),
    },
    {
      id: 5,
      name: "emma",
      email: "emma@gmail.com",
      age: "15",
      date: "Sun, jul 17th 2023",
      status: "pending",
      loanType: "institutional",
      action: (
        <Link to="/dashboard/loans/details">
          <button className="border p-2 rounded-md ">View</button>
        </Link>
      ),
    },
  ];

  const [records, setRecords] = useState(data);

  function handleFilter(event) {
    const newData = data.filter((row) => {
      return row.name.toLowerCase().includes(event.target.value.toLowerCase());
    });

    setRecords(newData);
  }

  return (
    <div className=" tablecover ">
      <h1 className="text-start font-extrabold text-2xl mt-[6em] mb-[2em] text-nowrap">
        My Loan History
      </h1>
      <div className=" desktoptable  max-w-screen-lg  ">
        <div className=" text-end mb-[1em] ">
          <input
            placeholder="search by name"
            type="text"
            onChange={handleFilter}
            className="border rounded-md"
          />
        </div>

        <div className="border rounded-lg">
          <DataTable
            columns={columns}
            data={records}
            selectableRows
            fixedHeader
            pagination
          ></DataTable>
        </div>
      </div>
      {/* mobile screen tab */}

      <div className="mobiletable">
        {data.map((item) => (
          <div key={item.id} className=" min-w-[20em] mb-4">
            <div className="border m-2 p-2 ">
              <div className="flex  m-1  ">
                <p className="w-1/2">Tracking ID </p>
                <p className="w-full md:w-1/2 whitespace-normal">{item.id}</p>
              </div>

              <div className="flex  m-1  p-2 ">
                <p className="w-1/2">Name</p>
                <p className="w-full md:w-1/2 whitespace-normal ">
                  {item.name}
                </p>
              </div>

              <div className="flex flex-wrap  m-1 p-2 ">
                <p className="w-1/2">Email</p>
                <p className=" w-full md:w-1/2 whitespace-normal ">
                  {item.email}
                </p>
              </div>

              <div className="flex m-1 p-2 ">
                <p className="w-1/2">Age</p>
                <p className="w-full md:w-1/2 whitespace-normal">{item.age}</p>
              </div>

              <div className="flex  m-1 p-2 ">
                <p className="w-1/2">Date</p>
                <p className="w-full md:w-1/2 whitespace-normal">
                  {" "}
                  {item.date}
                </p>
              </div>

              <div className="flex m-1 p-2  ">
                <p className="w-1/2">Loan Type</p>
                <p className="w-full md:w-1/2 whitespace-normal">
                  {item.loanType}
                </p>
              </div>

              <div className="flex  m-1 p-2 ">
                <p className="w-1/2">Status</p>
                <p className="w-full md:w-1/2 whitespace-normal">
                  {item.status}
                </p>
              </div>

              <div className="flex m-1 p-2">
                <p className="w-1/2">Action</p>
                <p className="w-full md:w-1/2 whitespace-normal">
                  <button className="border  p-1 rounded-md ">
                    {item.action}
                  </button>
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
