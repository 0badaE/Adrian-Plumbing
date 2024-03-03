import React from 'react'
import { Outlet,NavLink } from "react-router-dom"



function Services() {
    const services = [
        {
            name:"Debouchage",
            location: "/service"
        },
        {
            name:"ChauffeEau",
            location: "service2"
        },
        {
            name:"Inspection",
            location: "service3"
        },
        {
            name:"Urgence",
            location: "service4"
        }
    ]
    const activeStyles = {
        backgroundColor: "#126DAF",
        
    }
  return (
    <div className="h-full w-full text-sm text-white text-500 font-medium">
        <div className="w-full h-18 bg-[#1894edff] flex items-center">
            <ul className= "w-full flex justify-around">
                {
                    services.map((item,index)=>(
                        <NavLink 
                        key = {index}
                        className="cursor-pointer hover:bg-[#126DAF] p-4 w-full h-full text-center"
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

export default Services