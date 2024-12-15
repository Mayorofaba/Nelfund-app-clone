import React from 'react'
import { Link } from 'react-router-dom'

export default function RequestLoan() {
    return (
        <div className=' items-center rounded-xl bg-slate-50 border w-[55em] m-20  mr-[20em] ml-[25em] ' >

            <div className='m-5' >
                <div className=' flex justify-between mb-10 '>
                    <h2 className='bg-green-100 text-green-800 p-3 rounded-xl' >Step 1 of 3</h2>
                    <h2 className='border rounded-xl p-2' >Cancel</h2>
                </div>
                <h2  >Loan Configuration</h2>
                <div className='mb-10 border rounded-md bg-green-50 border-green-500 mt-5 p-4 that normal mantaje
                 ' >
                    <p>This Loan provision would cover in it's entirety
                        your obligatory institutional fee as provided by
                        your institution. If the loan upkeep loan is
                        selected , a monthly stepend of #20,000 will be paid to
                        your provided account for a period of 12 months</p>
                </div>
                <h2>Upkeep Loan </h2>
                <div className='border p-5 pt-2 mb-10'  >
                    <input required type="checkbox" /> <span>I need Upkeep Loan</span>


                </div>

                <div className='text-end' >
                    <Link to="/loans/application/2" >
                        <button className='bg-green-700 text-white  rounded-2xl  p-2 min-w-[20em] '  >Continue</button>
                    </Link>
                </div>

            </div>
        </div>
    )
}
