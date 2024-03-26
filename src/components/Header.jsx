import React from 'react'
import { NavLink, Link, useNavigate,useLocation } from "react-router-dom"
import Logo from "../assets/Logo.png"
import { IoMenu } from "react-icons/io5";
import { FaTimes } from "react-icons/fa";
import { BiPhoneCall } from "react-icons/bi";
import { IoIosArrowDown } from "react-icons/io";



function Header(props) {
  const [menuBtn, setMenuBtn] = React.useState(false)
  const [hoveredItem, setHoveredItem] = React.useState(null);
  const [submenu, setSubmenu] = React.useState(null);
  const navigate = useNavigate();
  let location = useLocation();

  
  const list = [
    {
      id:1,
      name: props.lang ? "À Propos" : "About Us",
      location: "/about"
    },
    {
      id:2,
      name: props.lang ? "Résidentiel" : "Residential",
      submenu : [
        {
          id: 1 ,
          name: "Construction" ,
          path: "service-resi/construction"
        },
        {
          id: 2 ,
          name: props.lang ? "Réparation" : "Repair",
          path: "service-resi/réparation"
        }, 
        {
          id: 3 ,
          name: props.lang ? "Vérification" : "Verification" ,
          path: "service-resi/vérification"
        },
        {
          id: 4 ,
          name: "Inspection" ,
          path: "service-resi/inspection"
        }, 
        {
          id: 5 ,
          name: props.lang ? "Rénovation" : "Renovation" ,
          path: "service-resi/rénovation"
        },
        {
          id: 6 ,
          name: "Installation" ,
          path: "service-resi/installation"
        },
        {
          id: 7 ,
          name: props.lang ? "Chauffe-Eau" : "WaterHeater",
          path: "service-resi/chauffe-eau"
        },
        {
          id: 8 ,
          name: props.lang ? "Tuyauteries" : "Pipes",
          path: "service-resi/tuyauteries"
        }, 
        {
          id: 9 ,
          name: props.lang ? "Débouchage" : "Unclogging",
          path: "service-resi/débouchage"
        },
        {
          id: 10 ,
          name: props.lang ? "Nos Services" : "Our Services" ,
          path: "/service-resi"
        },
      ]
    },
    
    {
      id:3,
      name: "Professionnel",
      submenu : [
        {
          id: 1 ,
          name: "Construction",
          path: "/service-prof/construction"
        },
        {
          id: 2 ,
          name:  props.lang ? "Réparation" : "Repair",
          path: "/service-prof/réparation"
        }, 
        {
          id: 3 ,
          name: props.lang ? "Vérification" : "Verification",
          path: "/service-prof/vérification"
        },
        {
          id: 4 ,
          name: "Inspection",
          path: "/service-prof/inspection"
        }, 
        {
          id: 5 ,
          name: props.lang ? "Rénovation" : "Renovation",
          path: "/service-prof/rénovation"
        },
        {
          id: 6 ,
          name: "Installation",
          path: "/service-prof/installation"
        },
        {
          id: 7 ,
          name: props.lang ? "Chauffe-Eau" : "WaterHeater",
          path: "service-prof/chauffe-eau"
        },
        {
          id: 8 ,
          name: props.lang ? "Tuyauteries" : "Pipes",
          path: "/service-prof/tuyauteries"
        }, 
        {
          id: 9  ,
          name: props.lang ? "Débouchage" : "Unclogging",
          path: "/service-prof/debouchage"
        },
        {
          id: 10  ,
          name: "Commercial",
          path: "/service-comm"
        },
        {
          id: 11  ,
          name: props.lang ? "Industrielle" : "Industrial",
          path: "/service-indu"
        },
      ]
    },
    {
      id:4,
      name: props.lang ? "Nous-Contactez" : "Contact Us",
      location: "/contact"
    }
  ]

  const activeStyles = {
    textDecoration: "underline",
    color: "#1894edff"
}
  
  return (
    <>  

      <div className="w-screen h-12 bg-[#126DAF] flex items-center justify-around text-white ">
        <div className="flex items-center text-xs w-full max-w-[1000px] md:text-base justify-between px-3"> 
        <div className="flex">
          <p className="flex items-center"> <BiPhoneCall size={18}/>&#160;
            {props.lang ? "Urgence Plomberie" : "Plumbing Emergency"}? &#160;24/7 -&#160; 
            <a 
              className="underline" 
              href="tel:5144496331">
                (514) 449-6331
            </a>
          </p>
        </div>
          <button
          className="text-lg font-semibold"
          onClick={props.toggle}
          >
          {props.lang ? "EN" : "FR"}
          </button>
        </div>
      </div>
      
      <header className="h-28 p-3 w-screen max-w-[1000px] mx-auto flex items-center justify-between overflow-visible relative z-9">
        <Link
        to="/"
        >
          <img src={Logo} alt="logo" className="w-48 max-sm:w-36"/>
        </Link>
        
        <nav className="w-[600px] max-sm:hidden h-20 flex items-center">
          <ul className="h-14 w-full flex items-center justify-around text-black text-lg">
            {list.map((item, index) => (
              <div
               key={index}
               className="relative"
               onMouseEnter={() => setHoveredItem(item.id)}
               onMouseLeave={() => setHoveredItem(null)}
               onClick = {() => setHoveredItem(item.id)}
              >
                <NavLink
                  to={item.location || location}
                  className="cursor-pointer hover:underline hover:text-[#1894edff]"
                  style={({ isActive }) => isActive && item.location ? activeStyles : null}
                >
                  <span className="flex items-center">
                  {item.name} {item.submenu && <IoIosArrowDown size={12} className={`${item.id === hoveredItem && "rotate-180"}`}/>}
                  </span>

                </NavLink>
                {
                  item.submenu && item.id === hoveredItem && (
                    <div
                      className="absolute flex flex-col top-full bg-white p-4 w-[200px] justify-around space-y-3.5 rounded-lg border border-black"
                    >
                      {item.submenu.map((subItem,index) => (
                        <NavLink 
                          className="hover:text-[#1894edff] hover:rounded hover:bg-gray-200 p-1"
                          key={subItem.id} 
                          to={`${subItem.path}`}
                        >
                          {subItem.name}
                        </NavLink>
                      ))}
                    </div>
                  )}
                </div>
              ))}
          </ul>
        </nav>
        {
          menuBtn === false ?
          <IoMenu  
            className="text-[45px] sm:hidden text-[#126DAF] cursor-pointer"
            onClick={() => setMenuBtn(!menuBtn)}
          />
          :
          <FaTimes className={`text-[35px] sm:hidden} text-[#126DAF] cursor-pointer z-10`}
          onClick={() => setMenuBtn(!menuBtn)}
          />
        }
      </header>
      
        {
          menuBtn && ( 
            <ul className="menu-animation flex flex-col text-gray-500 text-xl font-medium items-center absolute w-full bg-white bg-opacity-95 z-9 mt-[125px]">
              {
                list.map((item,index)=> (
                <div
                  className='border-2 py-2 border-white border-b-[#c0d8eb]'
                  key = {index}
                  onClick={()=>setSubmenu(item.id === submenu ? null : item.id)}
                >
                  <p 
                    className="text-2xl w-screen p-3 font-semibold"
                    key={index}
                    onClick={()=>{
                      if(item.submenu === undefined){
                        navigate(`${item.location}`)
                        setMenuBtn(false)
                      }}}
                  >

                    <span className={`flex items-center cursor-pointer`}>
                      {item.name} {item.submenu && <IoIosArrowDown size={12} className={`${item.id === submenu && "rotate-180"}`}/>}
                    </span>
                  </p>
                    {
                      item.submenu && item.id === submenu && (
                      <div
                        className="text-gray-500 flex flex-col w-[130px] justify-around"
                      >
                      {item.submenu.map((subItem) => (
                        <div>
                          <NavLink 
                          className="flex pl-6 py-3 text-[16.3px] font-medium"
                          key={subItem.id} 
                          to={`${subItem.path}`}
                          onClick={()=> setMenuBtn(false)}
                        >
                            {subItem.name}
                          </NavLink>
                        </div>
                      ))}
                      
                    </div>
                    )}
                  
                </div>
              ))
                
              }
            </ul>
          )
        }
     
      
    </>
  )
}

export default Header