import React from 'react'
import {Link} from "react-router-dom"
import about from "../assets/about.jpg"
import unclog from "../assets/unclog.jpeg"
import { FaCheck } from "react-icons/fa"
import home from "../assets/residentiel.png"
import industrial from "../assets/industrielle.png"
import commercial from "../assets/commercial.png"

function About(props) {
  const guarantee = [
    props.lang?"Assurance de qualité" : "Quality Assurance",
    props.lang?"Priorité au client" : "Client Priority",
    props.lang?"Intégrité professionnelle" : "Professional Integrity",
    props.lang?"Transparence et confiance" : "Transparency and Trust",
    props.lang?"Service d’excellence" : "Excellent Service"
  ]
  return (
    <div className="text-black w-full h-full max-w-[1000px] m-auto sm:w-full no-scrollbar  overflow-y-scroll">
        <div
         className="w-full h-34 sm:h-48 lg:h-64 mb-6"
         style={{
         backgroundImage: `url(${about})`,
         backgroundSize: "cover",
         backgroundRepeat: "no-repeat",
         }}
        >
          <div className="w-full h-28 sm:h-48 lg:h-64 flex justify-center ">
            <h1 className="text-white text-3xl md:text-5xl font-semibold h-full flex items-center">
              {props.lang?"Plomberie Adican":"Adican Plumbing"}</h1>
          </div>
        </div>
        <div className="p-2 flex flex-col lg:flex-row justify-around items-center">
          <p className="p-2 w-full lg:w-[50%] mb-6">
            {props.lang?"Au cœur de Montréal, Plomberie Adican est synonyme d’excellence en plomberie pour les secteurs résidentiel, commercial et industriel. Disponible 24/7, notre équipe d’experts est reconnue pour sa fiabilité et son savoir-faire. Nous nous engageons à assurer le confort et la sécurité de nos clients, en apportant des solutions durables grâce à notre maîtrise des technologies de pointe." : "Situated in the heart of Montreal, Adican Plumbing is synonymous with excellence in plumbing services for residential, commercial, and industrial sectors. Available 24/7, our team of experts is recognized for their reliability and expertise. We are committed to ensuring the comfort and safety of our clients by providing sustainable solutions through our mastery of cutting-edge technologies."
            }
            <br />
            <br />
            {props.lang?"Nous anticipons et résolvons vos problèmes de plomberie avant même qu’ils ne se manifestent, vous offrant ainsi une tranquillité d’esprit sans pareil. Chez   Plomberie Adican, chaque intervention est une promesse de qualité et d’efficacité,  adaptée à tous les environnements, qu’ils soient domestiques, professionnels ou  industriels.": "We anticipate and resolve your plumbing issues before they even arise, offering you unparalleled peace of mind. At Adican Plumbing, each intervention is a promise of quality and efficiency, tailored to all environments, whether they be domestic, professional, or industrial."}
          </p>
          <img 
            src={unclog} 
            alt="unclog" 
            className="rounded-xl w-full lg:w-[50%]"
          />
          </div>

          <div className="w-full p-6 flex flex-col sm:flex-row justify-around">
            <div className="flex flex-col mb-5 p-2">
              <h1 className="text-3xl sm:text-4xl font-medium w-full mb-7 text-center sm:text-left">{props.lang?"Notre Guarantie": "Our Guarantee"}</h1>
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
            <div className="flex flex-col mb-5 p-2">
              <h1 className="text-3xl sm:text-4xl font-medium w-full mb-7 text-center sm:text-left">{props.lang?"Nous Servons":"We Serve"}</h1>
              <ul>
                <li 
                  className="flex mb-3 items-center">
                  <FaCheck
                      size={15}
                      className="text-green-500"
                  />
                  <img 
                    src= {home} 
                    alt="home" 
                    className="w-12"
                  />
                  &#160;
                  {props.lang?"Residentiel":"Residential"}
                </li>
                <li 
                  className="flex mb-3 items-center">
                  <FaCheck
                      size={15}
                      className="text-green-500"
                  />
                  <img 
                    src= {commercial} 
                    alt="home" 
                    className="w-12"
                  />
                  &#160;
                  Commercial
                </li>
                <li 
                  className="flex mb-3 items-center">
                  <FaCheck
                      size={15}
                      className="text-green-500"
                  />
                  <img 
                    src= {industrial} 
                    alt="home" 
                    className="w-12"
                  />
                  &#160;
                  {props.lang?"Industriel":"Industrial"}
                </li>
              </ul>
            </div>
              <hr />
            <div className=" w-full sm:w-[350px] flex flex-col items-center p-2">
              <h1 className="text-3xl sm:text-4xl font-medium mb-7 text-center sm:text-left">{props.lang?"Nos Prix":"Our Prices"}</h1>
              <p className="mb-5">
              {props.lang?"Nous identifions la source du problème pour vous offrir des solutions efficaces et économiques, en toute transparence. Contactez-nous pour un devis ou des détails sur nos services." : "We identify the root of the problem to provide you with effective and economical solutions, all with complete transparency. Contact us for a quote or for more details about our services."}</p>
              <Link 
               to="/contact"
               className="w-[160px] text-white text-center p-3 md:p-2 lg:p-3 md:w-36 md:text-sm  rounded-md bg-[#4fb6ffff] hover:bg-[#4492C6] duration-300"
              >
                {props.lang?"Contactez-Nous":"Contact Us"}
              </Link>
            </div>

          </div>

    </div>
  )
}

export default About