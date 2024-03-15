import React from 'react'
import { Link } from "react-router-dom"
import { FaCheck } from "react-icons/fa"
import indu from "../assets/indu.jpg"
import industrialPlumb from "../assets/industrialPlumb.jpg"



function ServicesResi() {
    const service = [
        "Trappe à graisse",
        "Chauffe-Eau",
        "Tuyauteries",
        "Drains de Toit",
        "Salle de Bain",
        "Urinoir", 
        "Abreuvoir", 
        "Robinet de Chasse",
        "Ligne d’air, Eau Refroidie",
        "Dégel de tuyaux",
        "Nettoyage par Pression",
        "Appareils Sanitaires",
        "Amorceur de Siphon",
        "Les Services Residentiels",
        "et Plus!"
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
              Service Industrielle</h1>
          </div>
        </div>
        <div className="p-2 mb-5 flex flex-col lg:flex-row justify-around items-center">
            <p className="p-2 w-full lg:w-[50%] mb-6">
                Plomberie Adican est votre allié stratégique pour répondre aux exigences élevées de la plomberie industrielle. Disponible 24/7, notre équipe d’experts se tient prête à intervenir dans vos immeubles, centres commerciaux, usines, et autres infrastructures industrielles. Nous offrons des solutions robustes et adaptées aux besoins spécifiques des environnements industriels, garantissant ainsi la sécurité, l’efficacité et la conformité de vos installations. Notre engagement est de soutenir la continuité de vos opérations avec un service fiable et des interventions précises, contribuant au succès de votre entreprise.
            </p>
            <img 
            src={industrialPlumb} 
            alt="unclog" 
            className="rounded-xl w-full lg:w-[45%]"
          />
        </div>
        <div className="flex justify-around  p-6 flex-col sm:flex-row bg-[#f4f8fa]">
            <div className=" w-full sm:w-[50%] p-5">
                <h1 className="text-3xl font-medium w-full mb-7 text-center sm:text-left">Nos Services</h1>
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
                    <h1 className="text-3xl sm:text-4xl font-medium mb-7 text-center    sm:text-left">Service non Listé ?</h1>
                    <p className="mb-5 text-center">
                     Si vous ne trouvez pas le service que vous cherchez, ou pour toute question, contactez Plomberie Adican. Nous sommes là pour répondre à vos besoins spécifiques.
                     </p>
                    <Link 
                        to="/contact"
                        className="w-[160px] text-white text-center p-3 md:p-2 lg:p-3 md:w-36 md:text-sm  rounded-md bg-[#4fb6ffff] hover:bg-[#4492C6] duration-300 mb-5"
                    >
                        Contactez-Nous
                    </Link>
                </div>
                <hr />
                <div className=" w-full p-5 sm:h-[50%] flex flex-col items-center">
                    <h1 className="text-3xl sm:text-4xl font-medium mb-7 text-center    sm:text-left">Nos Prix</h1>
                    <p className="mb-5 text-center">
                        Nous identifions la source du problème pour vous offrir des solutions efficaces et économiques, en toute transparence. Contactez-nous pour un devis ou des détails sur nos services.
                    </p>
                </div>
                
            </div>
        </div>
    </div>
  )
}

export default ServicesResi