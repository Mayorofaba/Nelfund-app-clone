import React from 'react'
import { Link } from 'react-router-dom'


export default function RequestloanTwo() {
    return (
        <div className=' items-center rounded-xl bg-slate-50 border w-[55em] m-20  mr-[20em] ml-[25em] ' >

            <div className='m-5' >
                <div className=' flex justify-between mb-10 '>
                    <h2 className='bg-green-100 text-green-800 p-3 rounded-xl' >Step 2 of 3</h2>
                    <h2 className='border rounded-xl p-2' >Cancel</h2>
                </div>
                <h2  >Upload Supporting Documents</h2>
                <div className='mb-10 border rounded-md  mt-5 p-4 flex justify-between ' >
                    <div><h2>Admission Letter <span>(mandatory)</span> </h2>
                        <p>JPEG or PDF only</p>
                    </div>
                    <div><h2>Upload Document</h2></div>
                </div>

                <div className='mb-10 border rounded-md  mt-5 p-4 flex justify-between ' >
                    <div><h2>Student ID Card <span>(optional)</span> </h2>
                        <p>JPEG or PDF only</p>
                    </div>
                    <div><h2>Upload Document</h2></div>
                </div>

                <h2>Upkeep Loan </h2>
                <div className='border p-5 pt-2 mb-10'  >
                    <input required type="checkbox" /> <span>I (Nwabuko Micheal ) acknowledge that I have read, understood and agree with the student loan Policy and Declaration  </span>


                </div>

                <div className='flex justify-between' >
                    <Link to="/loans/application" >
                        <button className='bg-white border text-black rounded-2xl  p-2 min-w-[20em] '  >Cancel</button>
                    </Link>

                    <Link>
                        <button className='bg-green-700 text-white  rounded-2xl  p-2 min-w-[20em] '  >Continue</button>

                    </Link>
                </div>

            </div>
        </div>
    )
}
