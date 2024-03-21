import React from 'react'
import cmmtq from "../assets/CMMTQ-white.png"

function Footer() {
  return (
    <div className="h-20 w-screen bg-[#126DAF] flex justify-center items-center flex-col text-white no-scrollbar overflow-y-scroll">
      <p className="flex items-center font-medium text-xs md:text-base">
              RBQ: 5823-4584-01 &#160;
              <img 
                src={cmmtq} 
                alt="cmmtq" 
                className="w-16 sm:w-20 my-2"
                />
            </p>
      <p className=" font-medium text-xs md:text-base">
        &#169; {new Date().getFullYear()} PLOMBERIE ADICAN

      </p>
    </div>
  )
}

export default Footer