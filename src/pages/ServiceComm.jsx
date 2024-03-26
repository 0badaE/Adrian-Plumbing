import React from 'react'
import { Link } from "react-router-dom"
import { FaCheck } from "react-icons/fa"
import commercial from "../assets/commercial-plum.jpg"
import washroom from "../assets/washroom.jpg"



function ServicesResi(props) {
    const service = [
        props.lang ? "Trappe à graisse": "Grease trap",
        props.lang ? "Drains de Toit": "Roof Drains",
        props.lang ? "Salle de Bain": "Bathroom",
        props.lang ? "Urinoir": "Urinal", 
        props.lang ? "Abreuvoir": "Drinking trough", 
        props.lang ? "Robinet de Chasse": "Flush Valve",
        props.lang ? "Ligne d’air, Eau Refroidie": "Air Line, Cooled Water",
        props.lang ? "Nettoyage par Pression": "Pressure Cleaning",
        props.lang ? "Appareils Sanitaires": "Sanitary devices",
        props.lang ? "Amorceur de Siphon": "Siphon Primer",
        props.lang ? "et Plus!":"and More!" 
      ]
  return (
    <div className="text-black w-full h-full max-w-[1000px] m-auto sm:w-full no-scrollbar  overflow-y-scroll">
        <div
         className="w-full h-34 sm:h-48 lg:h-64 mb-6"
         style={{
         backgroundImage: `url(${commercial})`,
         backgroundSize: "cover",
         backgroundRepeat: "no-repeat",
         }}
        >
          <div className="w-full h-28 sm:h-48 lg:h-64 flex justify-center ">
            <h1 className="text-white text-3xl md:text-5xl font-semibold h-full flex items-center">
              {props.lang?"Service Commercial":"Commercial Services"}</h1>
          </div>
        </div>
        <div className="p-2 mb-5 flex flex-col lg:flex-row justify-around items-center">
            <p className="p-2 w-full lg:w-[50%] mb-6">
              {props.lang?"Plomberie Adican est le partenaire privilégié des entreprises pour tous les besoins en plomberie commerciale. Notre équipe d’experts est disponible 24/7 pour intervenir dans vos restaurants, magasins, centres commerciaux et plus encore, avec la même efficacité et précision qui nous caractérise. Nous comprenons les enjeux uniques du secteur commercial et nous nous engageons à offrir des solutions sur mesure qui contribuent à la fluidité et à la prospérité de votre activité. En veillant à la performance et à la conformité de vos installations, nous assurons le bien-être de vos clients et la continuité de vos opérations." : "Adican Plumbing is the preferred partner for businesses for all their commercial plumbing needs. Our team of experts is available 24/7 to serve your restaurants, stores, shopping centers, and more, with the same efficiency and precision that sets us apart. We understand the unique challenges of the commercial sector and are committed to offering customized solutions that contribute to the smooth running and prosperity of your business. By ensuring the performance and compliance of your facilities, we guarantee the well-being of your customers and the continuity of your operations."}
            </p>
            <img 
            src={washroom} 
            alt="unclog" 
            className="rounded-xl w-full lg:w-[45%]"
          />
        </div>
        <div className="flex justify-around  p-6 flex-col sm:flex-row bg-[#f4f8fa]">
            <div className=" w-full sm:w-[50%] p-5">
                <h1 className="text-3xl font-medium w-full mb-7 text-center sm:text-left">{props.lang ? "Nos" :"Our"} Services</h1>
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