import React from 'react'
import { MdOutlineMail } from "react-icons/md";
import { FaFacebook} from "react-icons/fa";
import { useNavigate  } from 'react-router-dom';


function Contact(props) {
  const navigate = useNavigate();
  return (
    <div className="text-black w-full max-w-[1000px] m-auto sm:w-full no-scrollbar overflow-y-scroll">
    <div className="flex flex-col px-4 justify-center mx-auto">
         <div className="py-2 mb-5">
            <p className="text-3xl font-bold inline border-b-4 border-[#4492C6] ">{props.lang?"Contactez-Nous":"Contact Us"}</p>
            <p className="pt-6 text-black">{props.lang?"Appeler nous au":"Call us at"} <a className="underline font-bold text-[#4fb6ffff]" href="tel:5144496331">(514) 449-6331</a></p>
            <p className="flex mb-6 items-center">
            {props.lang?"Envoyez-nous un message sur":"Send us a Message through"} &#160;
              <a 
                href="https://www.facebook.com/plomberieadican?mibextid=qi2Omg"
                target="_blank"
                rel="noreferrer"
              >
                  <FaFacebook
                    size={30}
                    className='text-[#0866ff]'
                  />
              </a>

            </p>
            <p>{props.lang?"Soumettez le formulaire ci-dessous pour nous envoyer un courriel!": "Submit the form below to email us!"}</p>
          </div>

          <div className="flex justify-center items-center">
            <form action="https://getform.io/f/raeqyxoa" method="POST" className="flex flex-col w-full md:w-1/2" >
              <input type="text" name="name" placeholder={props.lang?"Nom":"Name"} className="p-2 bg-transparent border-2 border-gray-700 rounded-md text-black focus:outline-none" />
              <input type="text" name="email" placeholder={props.lang?"Courriel":"Email"} className="p-2 bg-transparent border-2 border-gray-700 rounded-md text-black focus:outline-none my-4" />
              <input type="number" name="telephone" placeholder={props.lang?"Numéro de Téléphone":"Phone Number"} className="p-2 bg-transparent border-2 border-gray-700 rounded-md text-black focus:outline-none mb-4" />
              <textarea name="message" placeholder={props.lang?"Votre Message":"Your Message"} rows="9" className="p-2 bg-transparent border-2 border-gray-700 rounded-md text-black focus:outline-none"></textarea>
              <button 
              onClick={()=> setTimeout(()=>{navigate("/")}, "1200")}
              className="text-white bg-[#4fb6ffff] px-3 py-5 my-8 mx-auto flex items-center w-28 h-8 justify-around rounded-md hover:bg-[#4492C6] duration-300"><span><MdOutlineMail /></span> <p>{props.lang?"Envoyer":"Submit"}</p></button>
            </form>
          </div>
      </div>
  </div>

  )
}

export default Contact