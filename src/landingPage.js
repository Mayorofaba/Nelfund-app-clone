// import { useState } from "react";
// import Menus from "./sideBarMenuComponents/sidebarData";
import { FaDollarSign } from "react-icons/fa";
import { Link } from "react-router-dom";
// import Layout from "./components/layout";



export default function LandingPage() {




    return (
        // <Layout>
      

                <div className="mainPartOfPage mx-auto   ">

                    {/* pageview */}

                    <div className="pageview ">
                        <h2 className="requestbtn mx-auto">Request for Student Loan</h2>
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
                                <h2>Total Loan Amont</h2>
                                <h1>$330,750</h1>
                            </div>

                            <div className="image">
                                <FaDollarSign />
                            </div>

                        </div>

                        {/* balance date  */}
                        <div className="amount">


                            <div className="value">
                                <h2>Balance  Date</h2>
                                <h1>N/A</h1>
                            </div>

                            <div className="image">
                                <FaDollarSign />
                            </div>

                        </div>




                        {/* Amount Repaid */}
                        <div className="amount">


                            <div className="value">
                                <h2>Amount Repaid</h2>
                                <h1>$0</h1>
                            </div>

                            <div className="image">
                                <FaDollarSign />
                            </div>

                        </div>


                    </div>

                    {/* end of loan details */}

                    {/* begin of faq */}

                    <div className="faqAll">


                        {/*  faq 1 */}
                        <div className="faq">
                            <h2>How to Apply?</h2>
                            <p>Learn more on how to apply for student's loan with a few click</p>
                            <h4 className="started" >Get Started</h4>



                        </div>

                        {/* faq 2 */}
                        <div className="faq">
                            <h2>FAQs</h2>
                            <p>Read about most frequently asked questions about the NG student loans</p>

                            <Link to="/FAQs">    <h4 className="started" >Read FAQs </h4> </Link>


                        </div>


                        {/* faq 3 */}
                        <div className="faq">
                            <h2>Help And Support</h2>
                            <p>Browse helpful topics andarticles to  help you navigate your sstudent portal</p>
                            <h4 className="started" >Get in Touch</h4>

                        </div>



                    </div>
                    {/* end of faq */}

                </div>

                // </Layout>

    );
}






