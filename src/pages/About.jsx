import React from 'react'
import {Link} from "react-router-dom"
import about from "../assets/about.jpg"
import unclog from "../assets/unclog.jpeg"
import { FaCheck } from "react-icons/fa"
import home from "../assets/residentiel.png"
import industrial from "../assets/industrielle.png"
import commercial from "../assets/commercial.png"

function About() {
  const guarantee = [
    "Assurance de qualité",
    "Priorité au client",
    "Intégrité professionnelle",
    "Transparence et confiance",
    "Service d’excellence"
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
              Plomberie Adican</h1>
          </div>
        </div>
        <div className="p-2 flex flex-col lg:flex-row justify-around items-center">
          <p className="p-2 w-full lg:w-[50%] mb-6">
            Au cœur de Montréal, Plomberie Adican est synonyme d’excellence en plomberie pour les secteurs résidentiel, commercial et industriel. Disponible 24/7, notre équipe d’experts est reconnue pour sa fiabilité et son savoir-faire. Nous nous engageons à assurer le confort et la sécurité de nos clients, en apportant des solutions durables grâce à notre maîtrise des technologies de pointe.
            <br />
            <br />
            Nous anticipons et résolvons vos problèmes de plomberie avant même qu’ils ne se   manifestent, vous offrant ainsi une tranquillité d’esprit sans pareil. Chez   Plomberie Adican, chaque intervention est une promesse de qualité et d’efficacité,  adaptée à tous les environnements, qu’ils soient domestiques, professionnels ou  industriels.
          </p>
          <img 
            src={unclog} 
            alt="unclog" 
            className="rounded-xl w-full lg:w-[50%]"
          />
          </div>

          <div className="w-full p-6 flex flex-col sm:flex-row justify-around">
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

            <div className="flex flex-col mb-5 p-2">
              <h1 className="text-3xl sm:text-4xl font-medium w-full mb-7 text-center sm:text-left">Nous Servons</h1>
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
                  Residentielle
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
                  Industrielle
                </li>
              </ul>
            </div>

            <div className="w-[350px] flex flex-col items-center p-2">
              <h1 className="text-3xl sm:text-4xl font-medium mb-7 text-center sm:text-left">Nos Prix</h1>
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
  )
}

export default About