import React from 'react'

function Services() {
  const residentiel = [
    "Service 1",
    "Service 2",
    "Service 3",
  ]
  const commercial = [
    "Service 1",
    "Service 2",
    "Service 3",
  ]
  const industrielle = [
    "Service 1",
    "Service 2",
    "Service 3",
  ]

  return (
    <div className="text-black w-full h-full p-6 max-w-[1000px] m-auto sm:w-full border-2 border-red-500 overflow-y-scroll no-scrollbar">
    <div>
      <p className="text-3xl font-bold inline border-b-4 border-[#4492C6]">Nos Services</p>
      
      <div className="flex flex-col md:flex-row border-2 justify-around border-black mt-8">
        <div className="border-2 w-full border-black">
          <p className="text-center font-semibold">Residentiel</p>
          <div className="px-6 flex flex-col">
            {residentiel.map((item,index)=>(
              <p className="mb-1">&#8226; {item}</p>
            ))}
          </div>
        </div>
        <div className="border-2 w-full border-black">
          <p className="text-center font-semibold">Industrielle</p>
          <div className="px-6 flex flex-col">
            {commercial.map((item,index)=>(
              <p className="mb-1">&#8226; {item}</p>
            ))}
          </div>
        </div>
        <div className="border-2 w-full border-black">
          <p className="text-center font-semibold">Commercial</p>
          <div className="px-6 flex flex-col">
            {industrielle.map((item,index)=>(
              <p className="mb-1">&#8226; {item}</p>
            ))}
          </div>
        </div>
      </div>
    </div>
     
      
    </div>
  )
}

export default Services