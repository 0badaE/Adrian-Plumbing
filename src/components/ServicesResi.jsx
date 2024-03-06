import React from 'react'
import { Outlet,NavLink } from "react-router-dom"



function ServicesResi() {
    const services = [
    {
        name:"Debouchage",
        location: "/service-resi"
    },
    {
        name:"ChauffeEau",
        location: "2"
    },
    {
        name:"Inspection",
        location: "3"
    },
    {
        name:"Urgence",
        location: "4"
    }
    ]


    const activeStyles = {
        backgroundColor: "#126DAF",
        
    }
  return (
    <div className="h-full w-full max-w-[1000px] mx-auto text-sm text-white text-500 font-medium overflow-y-scroll no-scrollbar">
        <div className="w-full h-18 bg-[#1894edff] flex items-center overflow-x-auto">
            <ul className= "w-full flex justify-around">
                {
                    services.map((item,index)=>(
                        <NavLink 
                        key = {index}
                        className="cursor-pointer hover:bg-[#126DAF] p-4 w-full h-full text-center text-xs md:text-base"
                        style={({ isActive }) => isActive ? activeStyles : null}
                        to={item.location}
                        end
                        >
                            {item.name}
                        </NavLink>
                    ))
                }
            </ul>
        </div>
        <Outlet/>
    </div>
  )
}

export default ServicesResi