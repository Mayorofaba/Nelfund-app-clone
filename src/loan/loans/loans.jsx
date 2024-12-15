import React from 'react'
// import Layout from '../../components/layout'
import Loantable from '../../components/loantable'
import { Link } from 'react-router-dom'

export default function Loans() {
    return (
        // <Layout>
        <div>

            <div className="pageview ">
                <Link to="/loans/application" >
                    <h2 className="requestbtn mx-auto">Request for Student Loan</h2>
                </Link>

            </div>

            {/* welcome message  */}
            <div className="welcome">
                <h2 className="welText">Welcome to the Student Loan Portal, Micheal </h2>
            </div>

            {/* the loan detail */}
            <div className="LoanDetails">

                {/* amount */}
                <div className="amount">


                    <div className="value">
                        <h2>Total Loans</h2>
                        <h1>2</h1>
                    </div>


                </div>

                {/* balance date  */}
                <div className="amount">


                    <div className="value">
                        <h2>Approved loan</h2>
                        <h1>0</h1>
                    </div>


                </div>




                {/* Amount Repaid */}
                <div className="amount">


                    <div className="value">
                        <h2>Pending Loan</h2>
                        <h1>2</h1>
                    </div>


                </div>
                {/* Amount Repaid */}
                <div className="amount">


                    <div className="value">
                        <h2>Declined LOan</h2>
                        <h1>0</h1>
                    </div>


                </div>

            </div>
            {/* end of load details */}

            {/* starts table */}
            <div>
                <Loantable />
            </div>

        </div>
        // </Layout>
    )
}
