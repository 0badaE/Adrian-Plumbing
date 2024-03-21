import React from 'react'
import {Link} from "react-router-dom"
import rennovationProfff from "../assets/rennovationProfff.jpg"
import RenovationProff from "../assets/RenovationProf.jpg"
import { MdOutlineLocationOn } from "react-icons/md";
import { SlBadge } from "react-icons/sl";
import cmmtq from "../assets/CMMTQ.png";
import { FaCheck } from "react-icons/fa";


function RenovationProf() {
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
         backgroundImage: `url(${RenovationProff})`,
         backgroundSize: "cover",
         backgroundRepeat: "no-repeat",
         }}
        >
          <div className="w-full h-28 sm:h-48 lg:h-64 flex justify-center ">
            <h1 className="text-white text-3xl md:text-5xl font-semibold h-full flex items-center text-center">
                Rénovation Professionnelle
            </h1>
          </div>
        </div>
        <div className="p-2 mb-5 flex flex-col lg:flex-row justify-around items-center">
          <p className="p-2 w-full lg:w-[50%] mb-6">
          La Rénovation Professionnelle chez Plomberie Adican est synonyme d’innovation et de qualité. Nos services s’adressent aux entreprises désireuses de moderniser leurs installations plomberie commerciales ou industrielles. Nous combinons notre savoir-faire technique avec des matériaux haut de gamme pour offrir des solutions de rénovation qui non seulement répondent aux normes les plus élevées, mais améliorent également l’efficacité et l’esthétique de vos espaces de travail.            
            <ul>
                <br />
                <h1 className='text-2xl font-medium'>Nos Service</h1>
                <br />
                <li>&#8226; Modernisation des Installations Plomberie</li>
                <li>&#8226; Amélioration de l’Efficacité Énergétique</li>
                <li>&#8226; Réfection Esthétique des Espaces de Plomberie</li>
                <li>&#8226; Conformité avec les Normes Industrielles </li>
                <li>&#8226; Consultation et Gestion de Projet </li>
                <li>&#8226; et Plus!</li>
            </ul>
        </p>
          <img 
            className="rounded-xl w-full lg:w-[40%]"
            src={rennovationProfff}
            alt="rennovation Pro+f" 
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

export default RenovationProf