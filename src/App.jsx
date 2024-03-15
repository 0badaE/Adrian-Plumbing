import React from "react"
import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  Routes
} from "react-router-dom"
import Layout from "./components/Layout"
import ServicesResi from "./pages/ServicesResi"
import ServiceComm from "./pages/ServiceComm"
import ServicesIndu from "./pages/ServicesIndu"
import Contact from "./pages/Contact"
import HomePage from "./pages/HomePage"
import Services from "./pages/Services"
import About from "./pages/About"
//Service Residentiels
import ConstructionResi from "./ServiceResi/ConstructionResi"

function App() {

  const router = createBrowserRouter(createRoutesFromElements(
    <>
      <Route path="/" element={<Layout/>}>
          <Route index element={<HomePage/>}/>
          <Route path="services" element={<Services/>}/>
          <Route path="contact" element={<Contact/>}/>
          <Route path="about" element={<About/>}/>
      
          <Route path="service-resi" element={<ServicesResi/>}>
            <Route path="construction" element={<ConstructionResi/>}/>
          </Route>
      
          <Route path="service-comm" element={<ServiceComm/>}/>
    
          <Route path="service-indu" element={<ServicesIndu/>}/>
      </Route>
    </>
  ))

  return (
    <>
      <RouterProvider router={router}/>
    </>
  )
}

export default App
