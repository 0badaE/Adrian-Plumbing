import React from "react"
import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route
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
import ReparationResi from "./ServiceResi/ReparationResi"
import VerificationResi from "./ServiceResi/VerificationResi"
import InspectionResi from "./ServiceResi/InspectionResi"
import RenovationResi from "./ServiceResi/RenovationResi"
import InstallationResi from "./ServiceResi/InstallationResi"
import ChauffeEauResi from "./ServiceResi/ChauffeEauResi"
import TuyauteriesResi from "./ServiceResi/TuyauteriesResi"
import DebouchageResi from "./ServiceResi/DebouchageResi"
//Service Professionel
import ConstructionProf from "./ServiceProf/ConstructionProf"
import ReparationProf from "./ServiceProf/ReparationProf"
import VerificationProf from "./ServiceProf/VerificationProf"
import InspectionProf from "./ServiceProf/InspectionProf"
import RenovationProf from "./ServiceProf/RenovationProf"
import InstallationProf from "./ServiceProf/InstallationProf"
import ChauffeEauProf from "./ServiceProf/ChauffeEauProf"
import DebouchageProf from "./ServiceProf/DebouchageProf"
import TuyauterieProf from "./ServiceProf/TuyauterieProf"

function App() {
  const router = createBrowserRouter(createRoutesFromElements(
  <>
    <Route path="/" element={<Layout/>}>
      <Route index element={<HomePage/>}/>
      <Route path="services" element={<Services/>}/>
      <Route path="contact" element={<Contact/>}/>
      <Route path="about" element={<About/>}/>
      {/* Section Residentielle */}
      <Route path="service-resi" element={<ServicesResi/>}/>
      <Route path="service-resi/construction" element={<ConstructionResi/>}/>
      <Route path="service-resi/réparation" element={<ReparationResi/>}/>
      <Route path="service-resi/vérification" element={<VerificationResi/>}/>
      <Route path="service-resi/inspection" element={<InspectionResi/>}/>
      <Route path="service-resi/rénovation" element={<RenovationResi/>}/>
      <Route path="service-resi/installation" element={<InstallationResi/>}/>
      <Route path="service-resi/chauffe-eau" element={<ChauffeEauResi/>}/>
      <Route path="service-resi/tuyauteries" element={<TuyauteriesResi/>}/>
      <Route path="service-resi/débouchage" element={<DebouchageResi/>}/>
      {/* Section Professionel */}
      <Route path="service-prof/construction" element={<ConstructionProf/>}/>
      <Route path="service-prof/réparation" element={<ReparationProf/>}/>
      <Route path="service-prof/vérification" element={<VerificationProf/>}/>
      <Route path="service-prof/inspection" element={<InspectionProf/>}/>
      <Route path="service-prof/rénovation" element={<RenovationProf/>}/>
      <Route path="service-prof/installation" element={<InstallationProf/>}/>
      <Route path="service-prof/chauffe-eau" element={<ChauffeEauProf/>}/>
      <Route path="service-prof/debouchage" element={<DebouchageProf/>}/>
      <Route path="service-prof/tuyauteries" element={<TuyauterieProf/>}/>
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
