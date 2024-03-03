import React from "react"
import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route
} from "react-router-dom"
import Layout from "./components/Layout"
import Services from "./components/Services"
import Service1 from "./pages/Service1"
import Service2 from "./pages/Service2"
import Service3 from "./pages/Service3"
import Service4 from "./pages/Service4"
import ChauffeEau from "./pages/ChauffeEau"
import Contact from "./pages/Contact"
import HomePage from "./pages/HomePage"

function App() {

  const router = createBrowserRouter(createRoutesFromElements(
    <>
      <Route path="/" element={<Layout/>}>
        <Route index element={<HomePage/>}/>
        <Route path="service" element={<Services/>}>
          <Route index element={<Service1/>}/>
          <Route path="service2" element={<Service2/>}/>
          <Route path="service3" element={<Service3/>}/>
          <Route path="service4" element={<Service4/>}/>
        </Route>
        <Route path="chauffeEau" element={<ChauffeEau/>}/>
        <Route path="contact" element={<Contact/>}/>
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
