import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from './Pages/Home'
import About from './Pages/About'
import Vans from './Pages/Vans';
import VanDetails from './Pages/VanDetails';
import './App.css'
import "./Server"
import Layout from "./components/Layout"
import Dashboard from './Pages/host/Dashboard';
import Income from './Pages/host/Income';
import Reviews from './Pages/host/Reviews';
import HostLayout from './Pages/host/HostLayout';
import HostVans from './Pages/host/HostVans';
import HostVansDetails from './Pages/host/HostVansDetails';
import HostVanInfo from './Pages/host/HostVanInfo';
import HostVansPricing from './Pages/host/HostVansPricing';
import HostVansPhotos from './Pages/host/HostVansPhotos';
function App() {
  return (
    <>
      <BrowserRouter>

        <Routes>
          <Route path='/' element={<Layout/>}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="vans">
                <Route index element={<Vans />} />
                <Route path=":id" element={<VanDetails />} />
           </Route>
            <Route path="/host" element={<HostLayout />}>
              <Route index element={<Dashboard/>}/>
              <Route path="income" element={<Income />} />
              <Route path="reviews" element={<Reviews />} />
              <Route path="vans" >
                <Route index element={<HostVans />}/>
                <Route path=':id' element={<HostVansDetails />}>
                <Route index element={<HostVanInfo />} />
                <Route path="pricing" element={<HostVansPricing />} />
                <Route path="photos" element={<HostVansPhotos />} />
                </Route>
              </Route>
            </Route>
            
          </Route>

        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
