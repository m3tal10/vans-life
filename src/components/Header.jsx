import React from 'react'
import {NavLink } from "react-router-dom"

export default function Header() {
  return (
    <header>
        <NavLink className="site-logo" to="/">#VanLife</NavLink>
        <nav>
          <NavLink to="/about" className={({isActive})=> isActive? "active-link":null}>About</NavLink>
          <NavLink to="/vans" className={({isActive})=> isActive? "active-link":null}>Vans</NavLink>
          <NavLink to="/host" className={({isActive})=> isActive? "active-link":null}>Host</NavLink>
        </nav>
      </header>
  )
}
