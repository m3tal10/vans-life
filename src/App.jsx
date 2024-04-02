import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from './Pages/Home'
import About from './Pages/About'
import Vans from './Pages/Vans';
import VanDetails from './Pages/VanDetails';
import './App.css'
import "./Server"
import Layout from "./components/Layout"
function App() {
  return (
    <>
      <BrowserRouter>

        <Routes>
          <Route element={<Layout/>}>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/vans" element={<Vans />} />
            <Route path="/vans/:id" element={<VanDetails />} />
          </Route>

        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
