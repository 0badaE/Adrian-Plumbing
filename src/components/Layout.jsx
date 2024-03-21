import React from 'react'
import { Outlet } from "react-router-dom"
import Header from './Header'
import Footer from './Footer'
import CallUsButton from './CallUsButton'

function Layout() {
  return (
    <div className="w-full h-screen flex flex-col justify-between">
        <Header/>
        <CallUsButton/>
        <Outlet/>
        <Footer/>
    </div>
  )
}

export default Layout