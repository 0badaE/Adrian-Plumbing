import React from 'react'
import { Link } from "react-router-dom"
import { FaCheck } from "react-icons/fa"
import resi from "../assets/resi.png"
import sink from "../assets/sink.jpg"



function ServicesResi() {
    const service = [
        "Réparation",
        "Chauffage d'eau",
        "Construction",
        "Vérification",
        "Rénovation ",
        "Tuyauteries", 
        "Dégel de tuyaux",
        "Inspection", 
        "Installation",
        "Débouchage",
        "Évaluation",
        "Fuite d’eau",
        "Service Frigo",
        "Service Robinet",
        "Pompe Submersible",
        "et Plus!"
      ]
  return (
    <div className="text-black w-full h-full max-w-[1000px] m-auto sm:w-full no-scrollbar  overflow-y-scroll">
        <div
         className="w-full h-34 sm:h-48 lg:h-64 mb-6"
         style={{
         backgroundImage: `url(${resi})`,
         backgroundSize: "cover",
         backgroundRepeat: "no-repeat",
         }}
        >
          <div className="w-full h-28 sm:h-48 lg:h-64 flex justify-center ">
            <h1 className="text-white text-3xl md:text-5xl font-semibold h-full flex items-center">
              Service Residentiel</h1>
          </div>
        </div>
        <div className="p-2 mb-5 flex flex-col lg:flex-row justify-around items-center">
            <p className="p-2 w-full lg:w-[50%] mb-6">
                Plomberie Adican est votre allié de confiance pour tous les besoins en plomberie de votre maison. Notre équipe d’experts est à votre service 24/7, prête à intervenir avec efficacité et précision. Que ce soit pour une réparation urgente ou une installation complexe, nous garantissons des solutions personnalisées qui s’intègrent harmonieusement à votre quotidien. Nous veillons à la longévité de vos installations avec des méthodes éprouvées et des technologies avancées, assurant ainsi le confort et la sécurité de votre foyer.
            </p>
            <img 
            src={sink} 
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
                        className="w-[160px] text-white text-center p-3 md:p-2 lg:p-3 md:w-36 md:text-sm  rounded-md bg-[#4fb6ffff] hover:bg-[#4492C6] duration-300"
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