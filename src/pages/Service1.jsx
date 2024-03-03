import React from 'react'
import unclog from "../assets/unclog.jpeg"

function Service1() {
  return (
    <div 
      className="text-black w-full p-6"
      style={
        {
          backgroundImage: `url(${unclog})`,
          backgroundSize: "cover",
          backgroundRepeat: 'no-repeat',
          height: "300px",
        }
      }
    >

      <div className="text-white">
        <h1 className="text-2xl font-semibold mb-6">Service 1</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia aspernatur vitae omnis, nobis rem ea. Voluptatum, officiis ex! Inventore cupiditate placeat, unde porro non beatae dolores voluptates. Veniam, nisi quaerat!</p>
      </div>
      
    </div>
  )
}

export default Service1