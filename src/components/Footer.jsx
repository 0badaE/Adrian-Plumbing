import React from 'react'
import Logo from "../assets/Logo.png"

function Footer() {
  return (
    <div className="h-20 w-full bg-[#4bdbc1ff] flex justify-center items-center">
      <img 
        src={Logo} 
        alt="Logo" 
        className="w-20"
      />
    </div>
  )
}

export default Footer