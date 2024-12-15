import React, { useState } from 'react'
import DataTable from 'react-data-table-component'
import { Link } from 'react-router-dom';

export default function Loantable() {

    const columns = [
        {
            name: "Tracking ID",
            selector: row => row.id,
            sortable: true
        },

        {
            name: "Date",
            selector: row => row.date,
            sortable: true


        },
        {
            name: "Status",
            selector: row => row.status,
            sortable: true


        },
        {
            name: "loanType",
            selector: row => row.loanType,
            sortable: true


        },
        {
            name: "Action",
            selector: row => row.action,
            sortable: true


        }
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
            action: <Link to="/loans/details" >view</Link>


        },
        {
            id: 2,
            name: "iceprince",
            email: "ice@gmail.com",
            age: "20",
            date: "Thur, Feb 2nd 2022",
            status: "successful",
            loanType: "upkeep",
            action: <Link to="/details" >view</Link>





        },
        {
            id: 3,
            name: "Angela",
            email: "angela@gmail.com",
            age: "17",
            date: "Tue, Jan 20th 2024",
            status: "failed",
            loanType: "institutional",
            action: <Link to="/details" >view</Link>






        },
        {
            id: 4,
            name: "cheta",
            email: "cheta@gmail.com",
            age: "19",
            date: "Sat, Sept 19th 2021",
            status: "successful",
            loanType: "upkeep",
            action: <Link to="/details" >view</Link>




        },
        {
            id: 5,
            name: "emma",
            email: "emma@gmail.com",
            age: "15",
            date: "Sun, jul 17th 2023",
            status: "pending",
            loanType: "institutional",
            action: <Link to="/details" >view</Link>





        }
    ];

    const [records, setRecords] = useState(data);

    function handleFilter(event) {
        const newData = data.filter(row => {
            return row.name.toLowerCase().includes(event.target.value.toLowerCase())
        })

        setRecords(newData)
    }

    return (
        <div className=' mt-[6em] ml-[3em] ' >
            <h1 className='text-start font-extrabold text-2xl mb-[2em] text-nowrap'>My Loan History</h1>

            <div className=' text-end mb-[1em] ' ><input placeholder='search by name' type="text" onChange={handleFilter} className='border rounded-md' /></div>

            <div className='border rounded-lg' >

                <DataTable
                    columns={columns}
                    data={records}
                    selectableRows
                    fixedHeader
                    pagination
                ></DataTable>

            </div>
        </div>
    )
}
