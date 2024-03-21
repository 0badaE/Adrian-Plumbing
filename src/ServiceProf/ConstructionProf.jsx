import React from 'react'
import {Link} from "react-router-dom"
import ConstructionIndu from "../assets/ConstructionIndu.jpeg"
import ConstructionProff from "../assets/ConstructionProf.jpg"
import { MdOutlineLocationOn } from "react-icons/md";
import { SlBadge } from "react-icons/sl";
import cmmtq from "../assets/CMMTQ.png";
import { FaCheck } from "react-icons/fa"


function ConstructionProf() {
  const guarantee = [
    "Assurance de qualité",
    "Priorité au client",
    "Intégrité professionnelle",
    "Transparence et confiance",
    "Service d’excellence"
  ]
  return (
    <div className="text-black w-full h-full max-w-[1000px] m-auto sm:w-full no-scrollbar overflow-y-scroll">
        <div
         className="w-full h-34 sm:h-48 lg:h-64 mb-6"
         style={{
         backgroundImage: `url(${ConstructionProff})`,
         backgroundSize: "cover",
         backgroundRepeat: "no-repeat",
         }}
        >
          <div className="w-full h-28 sm:h-48 lg:h-64 flex justify-center ">
            <h1 className="text-white text-3xl md:text-5xl font-semibold h-full flex items-center text-center">
              Construction Professionnelle
            </h1>
          </div>
        </div>
        <div className="p-2 mb-5 flex flex-col lg:flex-row justify-around items-center">
          <p className="p-2 w-full lg:w-[50%] mb-6">
          Plomberie Adican est votre allié de choix pour tous vos projets de construction professionnelle, commerciale ou industrielle. Notre expertise s’étend à la réalisation d’installations plomberie complexes, répondant aux exigences spécifiques des environnements commerciaux et industriels. Nous nous engageons à fournir des solutions durables et performantes, en utilisant des matériaux de première qualité et les dernières innovations technologiques.          
            <ul>
                <br />
                <h1 className='text-2xl font-medium'>Nos Service</h1>
                <br />
                <li>&#8226; Conception et Installation de Plomberie Industriel</li>
                <li>&#8226; Plomberie pour Constructions Commerciales</li>
                <li>&#8226; Intégration de Technologies Avancées</li>
                <li>&#8226; Respect des Normes de Sécurité et Environnementales</li>
                <li>&#8226; Maintenance et Support Technique</li>
                <li>&#8226; et Plus!</li>
          </ul>
        </p>
          <img 
            className="rounded-xl w-full lg:w-[40%]"
            src={ConstructionIndu}
            alt="ConstructionIndu" 
          />
        </div>
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
              <SlBadge  
                size={45}
                className="text-[#295880] mb-5 hover:scale-105 hover:cursor-pointer"
                />
                <p className="text-center text-xs sm:text-sm w-full">
                  Standard d'Industrie
                </p>
              </div>
            </div>
            
            <div className="w-full p-6 flex flex-col sm:flex-row justify-around mt-10">
              <div className="flex flex-col mb-5 p-2">
                <h1 className="text-3xl sm:text-4xl font-medium w-full mb-7 text-center sm:text-left">Notre Guarantie</h1>
                <ul>
                  {
                    guarantee.map((item,index)=>(
                      <li
                        key={index}
                        className="flex mb-3 items-center"
                      >
                        <FaCheck
                        size={15}
                        className="text-green-500"
                        />
                        &#160;{item}
                      </li>
                    ))
                  }
                </ul>
            </div>
              <hr />
            <div className=" w-full sm:w-[350px] flex flex-col items-center p-2 ">
              <h1 className="text-3xl sm:text-4xl font-medium mb-7 w-full text-center">Nos Prix</h1>
              <p className="mb-5">
              Nous identifions la source du problème pour vous offrir des solutions efficaces et économiques, en toute transparence. Contactez-nous pour un devis ou des détails sur nos services.</p>
              <Link 
               to="/contact"
               className="w-[160px] text-white text-center p-3 md:p-2 lg:p-3 md:w-36 md:text-sm  rounded-md bg-[#4fb6ffff] hover:bg-[#4492C6] duration-300"
              >
                Contactez-Nous
              </Link>
            </div>

          </div>

        </div>

      </div>
  )
}

export default ConstructionProf