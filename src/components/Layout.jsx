import React from 'react'
import { Outlet } from "react-router-dom"
import Header from './Header'
import Footer from './Footer'
import CallUsButton from './CallUsButton'

function Layout(props) {
  return (
    <div className="w-full h-screen flex flex-col justify-between">
        <Header toggle={props.toggle} lang={props.lang}/>
        <CallUsButton/>
        <Outlet/>
        <Footer lang={props.lang}/>
    </div>
  )
}

export default Layout