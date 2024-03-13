import React from "react"
import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route
} from "react-router-dom"
import Layout from "./components/Layout"
import ServicesResi from "./components/ServicesResi"
import Debouchage from "./pages/ServiceResi/Debouchage"
import Service2 from "./pages/ServiceResi/Service2"
import Service3 from "./pages/ServiceResi/Service3"
import Service4 from "./pages/ServiceResi/Service4"
import Contact from "./pages/Contact"
import HomePage from "./pages/HomePage"
import Services from "./pages/Services"
import About from "./pages/About"

function App() {

  const router = createBrowserRouter(createRoutesFromElements(
    <>
      <Route path="/" element={<Layout/>}>
        <Route index element={<HomePage/>}/>
        <Route path="services" element={<Services/>}/>
        <Route path="contact" element={<Contact/>}/>
        <Route path="about" element={<About/>}/>

        <Route path="service-resi" element={<ServicesResi/>}>
          <Route index element={<Debouchage/>}/>
          <Route path="2" element={<Service2/>}/>
          <Route path="3" element={<Service3/>}/>
          <Route path="4" element={<Service4/>}/>
        </Route>
        
        
          
        {/* <Route path="service-ind" element={<{}/>}>

        </Route> */}
        

        
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
