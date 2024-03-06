import React from 'react'
import { NavLink, Link } from "react-router-dom"
import Logo from "../assets/Logo.png"
import { IoMenu } from "react-icons/io5";
import { FaTimes } from "react-icons/fa";
import { BiPhoneCall } from "react-icons/bi";


function Header() {
  const [menuBtn, setMenuBtn] = React.useState(false)
  const list = [
    {
      id:1,
      name: "Résidentiel",
      location: "/service-resi"
    },
    {
      id:2,
      name: "Commercial",
      location: "/service-comm"
    },
    {
      id:3,
      name: "Industriel",
      location: "/service-ind"
    },
    {
      id:4,
      name: "Nous-Contactez",
      location: "/contact"

    }
  ]

  const activeStyles = {
    textDecoration: "underline",
    color: "#1894edff"
}

  
  return (
    <>  

      <div className="w-screen h-12 bg-[#f82525] flex items-center justify-around text-white">
        <div className="flex items-center text-xs w-[285px] md:text-base md:w-[370px] justify-around"> 
          <p className="flex items-center"> <BiPhoneCall size={22}/> Urgence plomberie?</p> 
          <p> 24/7 -</p>
          <p><a className="underline"href="tel:#">(123) 456-7890</a></p>
        </div>
      </div>
      
      <header className="h-28 p-3 w-screen max-w-[1000px] mx-auto flex items-center justify-between bg-[#ffffff]">
        <Link
        to="/"
        >
          <img src={Logo} alt="logo" className="w-36 rounded-lg max-sm:w-28 z-10"/>
        </Link>
        
        <nav className="w-[600px] max-sm:hidden h-20 flex items-center">
          <ul className="h-14 w-full flex items-center justify-around text-black text-lg">
            {
              list.map((item,index)=> (
                <NavLink 
                  to = {item.location}
                  className= {`${item.style} cursor-pointer hover:underline hover:text-[#1894edff]`} 
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
            className="text-[45px] sm:hidden text-[#126DAF]"
            onClick={() => setMenuBtn(!menuBtn)}
          />
          :
          <FaTimes className={`text-[35px] sm:hidden ${menuBtn ? "text-white" : ""} z-10`}
          onClick={() => setMenuBtn(!menuBtn)}
          />
        }
      </header>
      
        {
          menuBtn && ( 
            <ul className={"flex flex-col text-white text-xl font-medium py-40 justify-around items-center absolute top-0 left-0 w-full h-screen bg-[#4fb6ff] z-9"}>
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