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
  const [language, setLanguage] = React.useState(true)
  const router = createBrowserRouter(createRoutesFromElements(
  <>
    <Route path="/" element={<Layout lang = {language} toggle={()=>setLanguage(!language)}/>}>
      <Route index element={<HomePage lang = {language} />}/>
      <Route path="services" element={<Services lang = {language}/>}/>
      <Route path="contact" element={<Contact lang = {language}/>}/>
      <Route path="about" element={<About lang = {language}/>}/>
      {/* Section Residentielle */}
      <Route path="service-resi" element={<ServicesResi lang = {language}/>}/>
      <Route path="service-resi/construction" element={<ConstructionResi lang = {language}/>}/>
      <Route path="service-resi/réparation" element={<ReparationResi lang = {language}/>}/>
      <Route path="service-resi/vérification" element={<VerificationResi lang = {language}/>}/>
      <Route path="service-resi/inspection" element={<InspectionResi lang = {language}/>}/>
      <Route path="service-resi/rénovation" element={<RenovationResi lang = {language}/>}/>
      <Route path="service-resi/installation" element={<InstallationResi lang = {language}/>}/>
      <Route path="service-resi/chauffe-eau" element={<ChauffeEauResi lang = {language}/>}/>
      <Route path="service-resi/tuyauteries" element={<TuyauteriesResi lang = {language}/>}/>
      <Route path="service-resi/débouchage" element={<DebouchageResi lang = {language}/>}/>
      {/* Section Professionel */}
      <Route path="service-prof/construction" element={<ConstructionProf lang = {language}/>}/>
      <Route path="service-prof/réparation" element={<ReparationProf lang = {language}/>}/>
      <Route path="service-prof/vérification" element={<VerificationProf lang = {language}/>}/>
      <Route path="service-prof/inspection" element={<InspectionProf lang = {language}/>}/>
      <Route path="service-prof/rénovation" element={<RenovationProf lang = {language}/>}/>
      <Route path="service-prof/installation" element={<InstallationProf lang = {language}/>}/>
      <Route path="service-prof/chauffe-eau" element={<ChauffeEauProf lang = {language}/>}/>
      <Route path="service-prof/debouchage" element={<DebouchageProf lang = {language}/>}/>
      <Route path="service-prof/tuyauteries" element={<TuyauterieProf lang = {language}/>}/>
      <Route path="service-comm" element={<ServiceComm lang = {language}/>}/>
      <Route path="service-indu" element={<ServicesIndu lang = {language}/>}/>
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
