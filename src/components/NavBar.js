import React from 'react'
import './NavBar.css'
import logo from '../images/logo.png'

function NavBar() {
  return (
    <nav> 
    <div className="container">
      
      <div id="bold">
        <span id="logo">
            <img src={logo}  alt="logo"/>
        </span>
        <span id="brand">BARBE & CIMON NOTAIRES</span>
      </div>

      <div className="links">
        <ul>
          <li> A PROPOS </li>
          <li> NOS SERVICES</li>
          <li> ARTICLES </li>
          <li> CONTACT</li>
          <li>EN</li>
        </ul>
      </div>
    </div>
  </nav>
  )
}

export default NavBar