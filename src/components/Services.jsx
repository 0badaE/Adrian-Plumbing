import React from 'react'
import { Outlet,NavLink } from "react-router-dom"



function Services() {
    const services = [
        {
            name:"Service 1",
            location: "/service"
        },
        {
            name:"Service 2",
            location: "service2"
        },
        {
            name:"Service 3",
            location: "service3"
        },
        {
            name:"Service 4",
            location: "service4"
        }
    ]
    const activeStyles = {
        backgroundColor: "#1cad92"
    }
  return (
    <div className="h-full w-full text-sm text-white text-500 font-medium">
        <div className="w-full h-18 bg-[#44c6af] flex items-center">
            <ul className= "w-full flex justify-around">
                {
                    services.map((item)=>(
                        <NavLink 
                        className="cursor-pointer hover:bg-[#1cad92] p-4 w-full h-full text-center"
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