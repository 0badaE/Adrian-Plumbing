import React from 'react'
import { Link } from "react-router-dom"
import { FaCheck } from "react-icons/fa"
import indu from "../assets/indu.jpg"
import industrialPlumb from "../assets/industrialPlumb.jpg"



function ServicesResi(props) {
    const service = [
        props.lang ? "Trappe à graisse": "Grease trap",
        props.lang?"Chauffage d'eau" : "Water heating",
        props.lang?" Tuyauteries" : "Pipes", 
        props.lang ? "Drains de Toit": "Roof Drains",
        props.lang ? "Salle de Bain": "Bathroom",
        props.lang ? "Urinoir": "Urinal", 
        props.lang ? "Abreuvoir": "Drinking trough", 
        props.lang ? "Robinet de Chasse": "Flush Valve",
        props.lang?"Ligne d’air, eau refroidie" : "Air Line, Cooled Water",
        props.lang?"Dégel de Tuyaux" : "Pipes Thawing ",
        props.lang ? "Nettoyage par Pression": "Pressure Cleaning",
        props.lang ? "Appareils Sanitaires": "Sanitary devices",
        props.lang ? "Amorceur de Siphon": "Siphon Primer",
        props.lang ? "Les Services Residentiels": "Residential Services",
        props.lang ? "et Plus!":"and More!"
      ]
  return (
    <div className="text-black w-full h-full max-w-[1000px] m-auto sm:w-full no-scrollbar  overflow-y-scroll">
        <div
         className="w-full h-34 sm:h-48 lg:h-64 mb-6"
         style={{
         backgroundImage: `url(${indu})`,
         backgroundSize: "cover",
         backgroundRepeat: "no-repeat",
         }}
        >
          <div className="w-full h-28 sm:h-48 lg:h-64 flex justify-center ">
            <h1 className="text-white text-3xl md:text-5xl font-semibold h-full flex items-center">
             {props.lang?"Service Industrielle":"Industrial Service"}</h1>
          </div>
        </div>
        <div className="p-2 mb-5 flex flex-col lg:flex-row justify-around items-center">
            <p className="p-2 w-full lg:w-[50%] mb-6">
                {props.lang?"Plomberie Adican est votre allié stratégique pour répondre aux exigences élevées de la plomberie industrielle. Disponible 24/7, notre équipe d’experts se tient prête à intervenir dans vos immeubles, centres commerciaux, usines, et autres infrastructures industrielles. Nous offrons des solutions robustes et adaptées aux besoins spécifiques des environnements industriels, garantissant ainsi la sécurité, l’efficacité et la conformité de vos installations. Notre engagement est de soutenir la continuité de vos opérations avec un service fiable et des interventions précises, contribuant au succès de votre entreprise." : "Adican Plumbing is your strategic ally in meeting the high demands of industrial plumbing. Available 24/7, our team of experts is ready to intervene in your buildings, shopping centers, factories, and other industrial infrastructures. We offer robust solutions tailored to the specific needs of industrial environments, thus ensuring the safety, efficiency, and compliance of your facilities. Our commitment is to support the continuity of your operations with reliable service and precise interventions, contributing to the success of your business."}
            </p>
            <img 
            src={industrialPlumb} 
            alt="unclog" 
            className="rounded-xl w-full lg:w-[45%]"
          />
        </div>
        <div className="flex justify-around  p-6 flex-col sm:flex-row bg-[#f4f8fa]">
            <div className=" w-full sm:w-[50%] p-5">
                <h1 className="text-3xl font-medium w-full mb-7 text-center sm:text-left">{props.lang?"Nos":"Our"} Services</h1>
                {service.map((item,index)=>(
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
            <hr />
            <div className="w-full sm:w-[50%]">
                <div className=" w-full p-5 sm:h-[50%] flex flex-col items-center">
                <h1 className="text-3xl sm:text-4xl font-medium mb-7 text-center sm:text-left">{props.lang ? "Service non Listé ?" : "Service not Listed?"}</h1>
                    <p className="mb-5 text-center">
                     {props.lang?"Si vous ne trouvez pas le service que vous cherchez, ou pour toute question, contactez Plomberie Adican. Nous sommes là pour répondre à vos besoins spécifiques.":"If you can’t find the service you’re looking for, or if you have any questions, please contact Adican Plumbing. We are here to cater to your specific needs."}
                     </p>
                    <Link 
                        to="/contact"
                        className="w-[160px] text-white text-center p-3 md:p-2 lg:p-3 md:w-36 md:text-sm  rounded-md bg-[#4fb6ffff] hover:bg-[#4492C6] duration-300 mb-5"
                    >
                        {props.lang?"Contactez-Nous":"Contact Us"}
                    </Link>
                </div>
                <hr />
                <div className=" w-full p-5 sm:h-[50%] flex flex-col items-center">
                <h1 className="text-3xl sm:text-4xl font-medium mb-7 text-center sm:text-left">{props.lang?"Nos Prix":"Our Prices"}</h1>
                    <p className="mb-5">
                {props.lang?"Nous identifions la source du problème pour vous offrir des solutions efficaces et économiques, en toute transparence. Contactez-nous pour un devis ou des détails sur nos services." : "We identify the root of the problem to provide you with effective and economical solutions, all with complete transparency. Contact us for a quote or for more details about our services."}
              </p>
                </div>
                
            </div>
        </div>
    </div>
  )
}

export default ServicesResi