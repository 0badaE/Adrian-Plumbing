import React from 'react'
import plumbing from "../assets/plumbing.jpg"
import { FaCheck } from "react-icons/fa"
import home from "../assets/residentiel.png"
import industrial from "../assets/industrielle.png"


function Services(props) {
  const services = [
    {
      title: props.lang ? "Residentiel" : "Residential",
      photo: home,
      service: [
        props.lang?"Réparation" : "Repair",
        props.lang?"Chauffage d'eau" : "Water heating",
        "Construction",
        props.lang?"Vérification" : "Verification",
        props.lang?"Rénovation" : "Renovation",
        props.lang?"Tuyauteries" : "Pipes", 
        "Inspection", 
        "Installation",
        props.lang?"Dégel de Tuyaux" : "Pipes Thawing ",
        props.lang?"Débouchage" : "Unclogging",
        props.lang?"Évaluation" : "Assessment",
        props.lang?"Fuite d’eau" : "Water Leak",
        props.lang?"Service Frigo" : "Fridge Service",
        props.lang?"Service Robinet" : "Faucet Service",
        props.lang?"Pompe Submersible" : "Submersible pump",
        props.lang?"et Plus!" : "and More!"
      ]
    },
    {
      title: props.lang?"Professionnel":"Professional",
      photo: industrial,
      service: [
        props.lang?"Trappe à graisse" : "Grease Trap",
        props.lang?"Drains de Toit" : "Roof Drains",
        props.lang?"Salle de Bain" : "Bathroom",
        props.lang?"Urinoir" : "Urinal", 
        props.lang?"Abreuvoir" : "Water Drinker", 
        props.lang?"Robinet de Chasse" : "Flush Valve",
        props.lang?"Ligne d’air, eau refroidie" : "Air Line, Cooled Water",
        props.lang?"Nettoyage par Pression" : "Pressure Cleaning",
        props.lang?"Appareils Sanitaires" : "Sanitary devices",
        props.lang?"Amorceur de Siphon" : "Siphon Primer",
        props.lang?"Les Services Residentiels" : "Residential Services",
        props.lang?"et Plus!" : "and More!"
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