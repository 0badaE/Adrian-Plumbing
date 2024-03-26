import React from 'react'
import {Link} from "react-router-dom"
import sectionInspectionProf from "../assets/sectionInspectionProf.jpg"
import inspectionProf from "../assets/inspectionProf.jpg"
import { MdOutlineLocationOn } from "react-icons/md";
import { SlBadge } from "react-icons/sl";
import cmmtq from "../assets/CMMTQ.png";
import { FaCheck } from "react-icons/fa";


function ConstructionProf(props) {
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
         backgroundImage: `url(${sectionInspectionProf})`,
         backgroundSize: "cover",
         backgroundRepeat: "no-repeat",
         }}
        >
          <div className="w-full h-28 sm:h-48 lg:h-64 flex justify-center ">
            <h1 className="text-white text-3xl md:text-5xl font-semibold h-full flex items-center text-center">
                {props.lang?"Vérification Professionnelle":"Professional Verification"}
            </h1>
          </div>
        </div>
        <div className="p-2 mb-5 flex flex-col lg:flex-row justify-around items-center">
          <p className="p-2 w-full lg:w-[50%] mb-6">
            {props.lang?"La Vérification Professionnelle chez Plomberie Adican est synonyme de confiance et d’excellence. Nos services sont spécialement conçus pour répondre aux besoins des entreprises commerciales et industrielles, assurant ainsi la conformité et la performance de leurs systèmes de plomberie. Nous utilisons des méthodes d’inspection rigoureuses et des technologies de pointe pour offrir des résultats fiables et précis.":"Professional Verification at Adican Plumbing is synonymous with trust and excellence. Our services are specifically designed to meet the needs of commercial and industrial businesses, thus ensuring the compliance and performance of their plumbing systems. We use rigorous inspection methods and cutting-edge technologies to deliver reliable and precise results."}        
            <ul>
                <br />
                <p className='text-2xl font-medium'>{props.lang?"Nos":"Our"} Services</p>
                <br />
                <li>&#8226; {props.lang?"Inspections Réglementaires et Conformité":"Regulatory Inspections and Compliance"}</li>
                <li>&#8226; {props.lang?"Utilisation de Technologies de Diagnostique Avancées":"Use of Advanced Diagnostique Technologies"}</li>
                <li>&#8226; {props.lang?"Rapports Détaillés pour Assurance":"Detailed Reports for Insurance"}</li>
                <li>&#8226; {props.lang?"Évaluations Préventives et Diagnostiques":"Preventive Assessments and Diagnostics"}</li>
                <li>&#8226; {props.lang?"Conseils d’Experts sur l’Entretien":"Expert Tips on Maintenance"}</li>
                <li>&#8226; {props.lang?"et Plus!":"and More!"}</li>
            </ul>
        </p>
          <img 
            className="rounded-xl w-full lg:w-[40%]"
            src={inspectionProf}
            alt="inspectionProf" 
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

export default ConstructionProf