import React from 'react'
import main from "../assets/main.jpg"
import { Link } from "react-router-dom"
import home from "../assets/residentiel.png"
import industrial from "../assets/industrielle.png"
import commercial from "../assets/commercial.png"
import cmmtq from "../assets/CMMTQ.png"

function HomePage() {

  return (
    <div className="w-full h-full max-w-[1400px] m-auto text-black overflow-y-auto">
      <div
        className="w-full h-full "
        style={{
         backgroundImage: `url(${main})`,
         backgroundSize: "contain",
         backgroundRepeat: "no-repeat",

        }}
      >
        <div className="w-full h-full p-6">
          <h1 className="text-white text-center text-3xl font-semibold mt-3 mb-12">Plombiers Certifiés à Votre Service</h1>
          <p className="text-md">Notre équipe de plombiers certifiés intervient chez vous, dans vos commerces et dans vos installations industrielles. Réparations, installations, conseils : nous sommes là pour vous offrir des solutions fiables et durables. Faites confiance à notre expertise ! </p>
          <div className="w-full h-[100px] flex justify-between items-center text-white">
            <Link 
            to="contact"
            className="w-[160px] text-center p-3 rounded-md bg-[#4fb6ffff]"
            >
              Contactez-Nous
            </Link>
            <Link 
            to="#"
            className="w-[160px] text-center p-3 rounded-md bg-[#4fb6ffff]"
            >
              Nos Services
            </Link>
          </div>
          <div className="p-6 w-full h-[200px]">
            <h1 className="text-2xl font-medium mb-6">Nous Servons</h1>
            <div className="w-full flex items-center justify-around">
              <Link
              to="/service-resi"
              >
                <img className="w-28"src={home} alt="home" />
              </Link>
              <Link
              to="/service-comm"
              >
                <img className="w-24"src={commercial} alt="commercial" />
              </Link>
              <Link
              to="/service-indu"
              >
                <img className="w-24"src={industrial} alt="industrial" />
              </Link>
            </div>
          </div>
          <div className="p-6 w-full h-[250px]">
            <img 
            src={cmmtq} 
            alt="cmmtq" 
            className="w-full mb-6"
            />
            <p className="text-center"> Nous possèdons les qualifications professionnelles et les compétences nécessaires pour exécuter des travaux en plomberie.</p>
          </div>

        </div>
      </div>
    </div>
  )
}

export default HomePage