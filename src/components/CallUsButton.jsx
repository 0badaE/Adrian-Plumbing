import React from "react"
import { BiPhoneCall } from "react-icons/bi";


function SocialLinks(){
    return(
        <div className="hidden sm:flex flex-col top-[60%] right-0 fixed">
            <ul>
               
                <li 
                 className= "flex justify-between items-center w-48 h-16 px-4 mr-[-130px] hover:mr-[-10px] duration-300 bg-green-600 rounded-lg"
                >
                    <a 
                     className="flex justify-between items-center w-full text-white text-sm" 
                     href="tel:5144496331"
                     rel="noreferrer"
                    > 
                        <BiPhoneCall
                         size={37}
                        />
                         (514) 449-6331
                    </a>
                </li>
            </ul>
        </div>
    )
}

export default SocialLinks