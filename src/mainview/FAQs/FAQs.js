import { useState } from "react"
import './FAQs.css'
import { FaPlusCircle } from "react-icons/fa";


import data from "./dataFAQs"
import { FaFacebook, FaInstagram, FaTwitter, FaTiktok, FaCopyright } from 'react-icons/fa';

import SecondHeader from '../secondHeader';


//  Faplus

export default function FAQs() {


    const [selected, setSelected] = useState(null)

    const handleSingleSelection = (getCurrentId) => {
        setSelected(getCurrentId === selected ? null : getCurrentId)

    }




    return (

        <div className="FAQs">



            <SecondHeader />


            <div className="max-w-5xl mx-auto" >




                <div className="  mt-52  mb-[4em] " >
                    <h1 className=" font-bold text-2xl " >Frequently asked questions </h1>
                    <p>Everything you need to know  about the student Loan and repayment</p>
                </div>

                {
                    data.map(dataItem =>


                        <div className="item items-center  " >


                            <div className="title mx-12 ">
                                <div className="flex justify-between mb-[0.8em] " >
                                    <h2 className=" font-semibold " >{dataItem.question}</h2>
                                    <span onClick={() => handleSingleSelection(dataItem.id)}>
                                        <FaPlusCircle /> </span>
                                </div>
                                {
                                    selected === dataItem.id ?
                                        <div className="content">{dataItem.answer}</div> : null
                                }
                            </div>


                        </div>



                    )}



            </div>


            {/* still have question */}

            <div className="stillhave  ">
                <h2 className="font-bold text-2xl mb-3 ">Still have questions?</h2>
                <p>Can't find the answer you are looking for ?  Please chat to our support team </p>
                <h4 className="started " >Get in Touch</h4>

            </div>


            <div className="middlepagePart flex justify-between gap-[2em] mb-[3em] ">

                <div className="left max-w-[50em] ">
                    <div className="logo"><img src="https://portal.nelf.gov.ng/assets/NELFUND_Logo.svg" alt="logo" />  </div>

                    <h2>Nigerian Higher Education Student Loan Application System</h2>


                    <p>
                        Student Loan Initiative is a program established by the Federal Government of Nigeria to break the barrier in Higher Education

                    </p>
                </div>
                {/* above is the end of left */}


                {/* below is the beeginning of right pat  */}
                <div className="rightPart flex justify-between gap-[5em] mr-[8em] ">
                    <div className="company">
                        <h2>Company</h2>

                        <ul className="list-style-none font-bold ">
                            <li>About Us</li>
                            <li>News</li>
                            <li>Contact</li>
                        </ul>
                    </div>



                    <div className="Resources ">
                        <h2>Resources</h2>

                        <ul className="list-style-none font-bold" >
                            <li>Blog</li>
                            <li>Newsletter</li>
                            <li>Events</li>
                            <li>Help Center</li>
                            <li>Tutorials</li>
                            <li>Support</li>
                        </ul>
                    </div>


                    <div className="Social">
                        <h2>Social</h2>
                        <ul className="list-style-none font-bold" >
                            <li>Twitter</li>
                            <li>Instagram</li>
                            <li>Facebook</li>
                            <li>Tiktok</li>
                        </ul>
                    </div>




                    <div className="Legal  ">

                        <h2>Legal</h2>
                        <ul className="list-style-none font-bold" >
                            <li>Terms</li>
                            <li>Privacy</li>
                            <li>Cookies</li>
                            <li>Licenses</li>
                            <li>Contact</li>

                        </ul>

                    </div>



                    {/* below is the end of Rightpart */}
                </div>





                {/* next line is the end of middlepart */}
            </div>




            {/* footer */}
            <div className="footer bg-green flex justify-between p-10 bg-green-600 ">
                <div className="right text-white ">
                    <FaCopyright color="white" /> 2024 Nigeria Student Loan. All Right Reserved.
                </div>



                <div className="left flex  gap-[1em] ">
                    <FaFacebook color="white" />
                    <FaInstagram color="white" />
                    <FaTiktok color="white" />
                    <FaTwitter color="white" />
                </div>
            </div>





        </div>
    )
}