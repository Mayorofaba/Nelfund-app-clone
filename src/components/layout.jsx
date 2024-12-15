import React from 'react'
import HeaderAndMenu from '../headerAndMenu'
import SideBar from '../sideBar'

export default function Layout({ children }) {
    return (

        <div className="LandingPage">

            <HeaderAndMenu />

            <div className="pageholder flex mx-auto ">

                <SideBar />
                <div>
                    {children}
                </div>

            </div>
        </div>

    )
}
