import React from 'react'
import main from "../assets/main.jpg"
import { Link } from "react-router-dom"
import home from "../assets/residentiel.png"
import industrial from "../assets/industrielle.png"
import commercial from "../assets/commercial.png"
import cmmtq from "../assets/CMMTQ.png"
import mc from "../assets/mc.png"
import visa from "../assets/visa.png"
import cash from "../assets/cash.png"
import interac from "../assets/interac.png"
import { MdOutlineLocationOn } from "react-icons/md";
import { FaRegClock } from "react-icons/fa";


function HomePage() {

  return (
    <div className="w-full h-full max-w-[1000px] m-auto text-black overflow-y-scroll no-scrollbar">
      <div
        className="w-full h-full "
        style={{
         backgroundImage: `url(${main})`,
         backgroundSize: "contain",
         backgroundRepeat: "no-repeat",

        }}
      >
        <div className="w-full h-full p-6">
          <div className="md:w-[55%] md:text-white lg:my-[45px]">
            <h1 className="text-white text-center text-3xl md:text-xl font-semibold mt-3 mb-14 md:mb-5">Plombiers Certifiés à Votre Service</h1>
            <p className="text-md text-center md:text-sm">Notre équipe de plombiers certifiés intervient chez vous, dans vos commerces et dans vos installations industrielles. Réparations, installations, conseils : nous sommes là pour vous offrir des solutions fiables et durables. Faites confiance à notre expertise ! </p>
          
            <div className="w-full h-[100px] md:h-[80px] flex justify-around items-center text-white lg:mt-8 lg:px-10">
              <Link 
              to="contact"
              className="w-[160px] text-center p-3 md:p-2 lg:p-3 md:w-36 md:text-sm  rounded-md bg-[#4fb6ffff] hover:bg-[#4492C6] duration-300"
              >
                Contactez-Nous
              </Link>
              <Link 
              to="/services"
              className="w-[160px] text-center p-3 md:p-2 lg:p-3 md:w-36 md:text-sm  rounded-md bg-[#4fb6ffff] hover:bg-[#4492C6] duration-300"
              >
                Nos Services
              </Link>
            </div>
          </div>
          
          <div className="p-6 w-full h-[200px]">
            <h1 className="text-2xl font-medium mb-6">Nous Servons</h1>
            <div className="w-full flex items-center justify-around">
              <div className='flex flex-col justify-between items-center hover:scale-105 hover:cursor-pointer'>
                <Link
                 to="/service-resi"
                >
                  <img className="w-28 mb-1"src={home} alt="home" />
                </Link>
                <p className='underline text-sm underline-offset-2'>Residentiel</p>
              </div>
              <div className='flex flex-col justify-between items-center hover:scale-105 hover:cursor-pointer'>
              <Link
              to="/service-comm"
              >
                <img className="w-[92px] mb-1"src={commercial} alt="commercial" />
              </Link>
              <p className='underline text-sm underline-offset-2'>Commercial</p>
              </div>
              <div className='flex flex-col justify-between items-center hover:scale-105 hover:cursor-pointer'>
              <Link
              to="/service-indu"
              >
                <img className="w-[92px] mb-1"src={industrial} alt="industrial" />
              </Link>
              <p className='underline text-sm underline-offset-2'>Industrial</p>
              </div>
            </div>
           
          </div>

          {/* Why work with us? */}
          <div className="py-6 w-full h-[200px] md:h-46 justify-center items-center md:justify-around md:flex-row md:px-12 bg-[#f4f8fa]">
            <h1 className="text-l sm:text-2xl font-medium w-full text-center mb-7">Pourquoi Travailler avec Nous?</h1>
            <div className="flex justify-around">
              
              <div className="flex flex-col items-center w-48 justify-between">
                <MdOutlineLocationOn 
                size={48}
                className="text-[#295880] mb-5 hover:scale-105 hover:cursor-pointer"
                />
                <p className="text-center text-xs sm:text-sm w-full">Plombiers Locaux</p>
              </div>

              <div className="flex flex-col items-center w-48 justify-between">
                <img 
                src={cmmtq} 
                alt="cmmtq" 
                className="w-36 mt-2 sm:mt-0 hover:scale-105 hover:cursor-pointer"
                />
                <p className="text-center text-xs sm:text-sm w-full">Certifié et Assuré</p>
              </div>

              <div className="flex flex-col items-center justify-around w-48">
              <FaRegClock 
                size={45}
                className="text-[#295880] mb-5 hover:scale-105 hover:cursor-pointer"
                />
                <p className="text-center text-xs sm:text-sm w-full">Service 24/7</p>
              </div>

            </div>
           
            
          </div>
          {/* Accepted Payment Section */}
          <div className="p-6 w-full h-[200px]">
            <h1 className="text-2xl font-medium mb-6">Nous Acceptons</h1>
            <div className="flex justify-around w-full items-center">
              <img src={cash} 
                className="h-10 md:h-[50px] hover:scale-105 hover:cursor-pointer"
                alt="cash" />
              <img src={interac} 
                className="h-10 md:h-[55px] hover:scale-105 hover:cursor-pointer"
                alt="interac" />
              <img src={visa} 
                className="h-16 md:h-24  hover:scale-105 hover:cursor-pointer"
                alt="visa" />
              <img src={mc} 
                className="h-16 md:h-24 hover:scale-105 hover:cursor-pointer"
                alt="mc" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HomePage