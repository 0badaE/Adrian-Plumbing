import React from 'react'
import plumbing from "../assets/plumbing.jpg"
import { FaCheck } from "react-icons/fa"
import home from "../assets/residentiel.png"
import industrial from "../assets/industrielle.png"
import commercial from "../assets/commercial.png"


function Services() {
  const services = [
    {
      title: "Residentiel",
      photo: home,
      service: [
        "Réparation",
        "Chauffage d'eau",
        "Construction",
        "Vérification",
        "Rénovation ",
        "Tuyauteries", 
        "Inspection", 
        "Installation",
        "Dégel de tuyaux",
        "Débouchage",
        "Évaluation",
        "Fuite d’eau",
        "Service Frigo",
        "Service Robinet",
        "Pompe Submersible",
        "et Plus!"
      ]
    },
    {
      title: "Professionnel",
      photo: industrial,
      service: [
        "Trappe à graisse",
        "Drains de Toit",
        "Salle de Bain",
        "Urinoir", 
        "Abreuvoir", 
        "Robinet de Chasse",
        "Ligne d’air, eau refroidie",
        "Nettoyage par Pression",
        "Appareils Sanitaires",
        "Amorceur de siphon",
        "Les Services Residentiels",
        "et Plus!"
      ]
    },
  ]
  
  return (
    <div className="text-black w-full h-full p-6 max-w-[1000px] m-auto sm:w-full overflow-y-scroll no-scrollbar">
      
      <img 
        src={plumbing} 
        alt="plumbing"
      />

      <div className="flex flex-col md:flex-row justify-around mt-8 ">
          {
            services.map((item,index) => (
              <div 
              key = {index}
              className="w-full rounded-lg sm:rounded-none p-2 my-4 bg-[#f4f8fa]">
                <h1 
                  className="text-center text-2xl font-semibold flex items-center justify-center mb-2">
                    {item.title} &#160;
                    <img 
                      src={item.photo} 
                      alt="home" 
                      className="w-8"
                    />
                </h1>
                <hr />

                <div className="px-6 flex flex-col justify-around">
                  {item.service.map((item,index)=>(
                    <p 
                    key = {index}
                    className="mb-1">
                      <span className="flex items-center">
                        <FaCheck size={12}
                          className="text-green-500"
                        /> 
                        &#160; {item}
                      </span>
                    </p>
                  ))}
                </div>
              </div>
            ))
          }
      </div>
    </div>
  )
}

export default Services