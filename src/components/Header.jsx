import React from 'react'
import { NavLink } from "react-router-dom"
import Logo from "../assets/Logo.png"
import { IoMenu } from "react-icons/io5";
import { FaTimes } from "react-icons/fa";

function Header() {
  const [menuBtn, setMenuBtn] = React.useState(false)
  const list = [
    {
      id:1,
      name: "Nos Services",
      location: "/service"
    },
    {
      id:2,
      name: "Chauffe-Eau",
      location: "/ChauffeEau"
    },
    {
      id:3,
      name: "Contactez-Nous",
      location: "/contact"
    },
    {
      id:4,
      name: "En"
    }
  ]

  const activeStyles = {
    textDecoration: "underline"
}

  
  return (
    <>
      <header className="h-28 p-3 w-full flex items-center justify-between bg-[#4bdbc1ff]">
        <img src={Logo} alt="logo" className="w-32 rounded-lg max-sm:w-24 z-10"/>
        
        <nav className="w-[600px] max-sm:hidden h-20 flex items-center">
          <ul className="h-14 w-full flex items-center justify-around text-white">
            {
              list.map((item,index)=> (
                <NavLink 
                  to = {item.location}
                  className= {`${item.style} cursor-pointer`} 
                  key={index}
                  style={({ isActive }) => isActive ? activeStyles : null}
                >
                  {item.name}
                </NavLink>
              ))
            }  
          </ul>
        </nav>
        {
          menuBtn === false ?
          <IoMenu  
            className="text-[45px] sm:hidden text-white"
            onClick={() => setMenuBtn(!menuBtn)}
          />
          :
          <FaTimes className="text-[35px] sm:hidden text-white z-10"
          onClick={() => setMenuBtn(!menuBtn)}
          />
        }
      </header>
      
        {
          menuBtn && ( 
            <ul className={"flex flex-col text-white text-xl py-40 justify-around items-center absolute top-0 left-0 w-full h-screen bg-[#4bdbc1ff]"}>
              {
                list.map((item,index)=> (
                  <NavLink 
                  to = {item.location}
                  className= {item.style} 
                  key={index}
                  onClick={()=>setMenuBtn(false)}
                >
                  {item.name}
                </NavLink>
                ))
              }  
            </ul>
          )
        }
     
      
    </>
  )
}

export default Header