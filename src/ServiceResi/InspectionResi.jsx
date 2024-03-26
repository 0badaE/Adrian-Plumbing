import React from 'react'
import {Link} from "react-router-dom"
import inspectsectionResi from "../assets/inspectsectionResi.jpg"
import inspectResi from "../assets/inspectResi.jpg"
import { MdOutlineLocationOn } from "react-icons/md";
import { SlBadge } from "react-icons/sl";
import cmmtq from "../assets/CMMTQ.png";
import { FaCheck } from "react-icons/fa"


function InspectionResi(props) {
  const guarantee = [
    props.lang?"Assurance de qualité" : "Quality Assurance",
    props.lang?"Priorité au client" : "Client Priority",
    props.lang?"Intégrité professionnelle" : "Professional Integrity",
    props.lang?"Transparence et confiance" : "Transparency and Trust",
    props.lang?"Service d’excellence" : "Excellent Service"
  ]
  return (
    <div className="text-black w-full h-full max-w-[1000px] m-auto sm:w-full no-scrollbar overflow-y-scroll">
        <div
         className="w-full h-34 sm:h-48 lg:h-64 mb-6"
         style={{
         backgroundImage: `url(${inspectsectionResi})`,
         backgroundSize: "cover",
         backgroundRepeat: "no-repeat",
         }}
        >
          <div className="w-full h-28 sm:h-48 lg:h-64 flex justify-center ">
            <h1 className="text-white text-3xl md:text-5xl font-semibold h-full flex items-center text-center">
            {props.lang?"Inspection de Type Résidentiel":"Residential Inspection"}</h1>
          </div>
        </div>
        <div className="p-2 mb-5 flex flex-col lg:flex-row justify-around items-center">
          <p className="p-2 w-full lg:w-[50%] mb-6">
          {props.lang?"Plomberie Adican est à la pointe de l’Inspection Résidentielle. Nous fournissons des rapports d’assurance complets, attestant de la qualité et de la sécurité de votre installation. Grâce à l’utilisation de technologies avancées, telles que des caméras d’inspection de pointe, nos professionnels peuvent identifier avec précision tout problème caché. Nous nous engageons à offrir un service d’inspection minutieux qui garantit non seulement la sécurité de votre domicile mais aussi votre sérénité.":"Adican Plumbing is at the forefront of Residential Inspection. We provide comprehensive insurance reports, attesting to the quality and safety of your installation. Thanks to the use of advanced technologies, such as state-of-the-art inspection cameras, our professionals can accurately identify any hidden issues. We are committed to offering a thorough inspection service that ensures not only the safety of your home but also your peace of mind."}            
          
              <ul>
                <br />
                <h1 className='text-2xl font-medium'>{props.lang?"Nos":"Our"} Services</h1>
                <br />
                <li>&#8226; {props.lang?"Rapports d’assurance Détaillés":"Detailed Insurance Reports"}</li>
                <li>&#8226; {props.lang?"Utilisation de Caméras d’Inspection":"Use of Inspection Cameras"}  </li>
                <li>&#8226; {props.lang?"Détection de Fuites":"Leak Detection"} </li>
                <li>&#8226; {props.lang?"Inspection des Canalisations":"Pipe Inspection"}</li>
                <li>&#8226; {props.lang?"Contrôle des Systèmes de Chauffage":"Control of Heating Systems"}</li>
                <li>&#8226; {props.lang?"et Plus!":"and More!"}</li>
          </ul>
        </p>
          <img 
            className="rounded-xl w-full lg:w-[40%]"
            src={inspectResi}
            alt="inspectResi" 
          />
        </div>
        <div className="py-6 w-full h-[200px] md:h-46 justify-center items-center md:justify-around md:flex-row md:px-12 bg-[#f4f8fa]">
            <h1 className="text-l sm:text-2xl font-medium w-full text-center mb-7">{props.lang?"Pourquoi Travailler avec Nous?":"Why Work with Us?"}</h1>
            <div className="flex justify-around">
              
              <div className="flex flex-col items-center w-48 justify-between">
                <MdOutlineLocationOn 
                size={48}
                className="text-[#295880] mb-5 hover:scale-105 hover:cursor-pointer"
                />
                <p className="text-center text-xs sm:text-sm w-full">{props.lang?"Plombiers Locaux":"Local Plumbers"}</p>
              </div>

              <div className="flex flex-col items-center w-48 justify-between">
                <img 
                src={cmmtq} 
                alt="cmmtq" 
                className="w-36 mt-2 sm:mt-0 hover:scale-105 hover:cursor-pointer"
                />
                <p className="text-center text-xs sm:text-sm w-full">{props.lang?"Certifié et Assuré":"Certified & Insured"}</p>
              </div>

              <div className="flex flex-col items-center justify-around w-48">
              <SlBadge  
                size={45}
                className="text-[#295880] mb-5 hover:scale-105 hover:cursor-pointer"
                />
                <p className="text-center text-xs sm:text-sm w-full">
                  {props.lang?"Standard d'Industrie":"Industry Standard"}
                </p>
              </div>
            </div>
            
            <div className="w-full p-6 flex flex-col sm:flex-row justify-around mt-10">
              <div className="flex flex-col mb-5 p-2">
                <h1 className="text-3xl sm:text-4xl font-medium w-full mb-7 text-center sm:text-left">{props.lang?"Notre Guarantie":"Our Guarantee"}</h1>
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
            <h1 className="text-3xl sm:text-4xl font-medium mb-7 text-center sm:text-left">{props.lang?"Nos Prix":"Our Prices"}</h1>
                    <p className="mb-5">
                {props.lang?"Nous identifions la source du problème pour vous offrir des solutions efficaces et économiques, en toute transparence. Contactez-nous pour un devis ou des détails sur nos services." : "We identify the root of the problem to provide you with effective and economical solutions, all with complete transparency. Contact us for a quote or for more details about our services."}
              </p>
              <Link 
               to="/contact"
               className="w-[160px] text-white text-center p-3 md:p-2 lg:p-3 md:w-36 md:text-sm  rounded-md bg-[#4fb6ffff] hover:bg-[#4492C6] duration-300"
              >
                {props.lang?"Contactez-Nous": "Contact Us"}
              </Link>
            </div>

          </div>

        </div>

      </div>
  )
}

export default InspectionResi