import React from 'react'
import logo from '../images/logo.png'
import './Brand.css'

function Brand() {
  return (
    <div className="brand-container">
        <div className="brand">
            <img src={logo} alt="logo"/>
            <h2>BARBE & CIMON NOTAIRES</h2>
        </div>

        <div className="linkss">
            <ul className="footer-links">
                <li> A PROPOS</li>
                <li> NOS SERVICES</li>
                <li> ARTICLES</li>
                <li> CONTACT</li>
            </ul>

            <div>
                <h4>BUREAU</h4>
                <p>101 BOULEVARD SAINT, <br/> JOSEPH O, MONTREAL, QC <br/> H2T 2P7</p>
                <h4>NOUS SUIVRE</h4>
            </div>
        </div>
    </div>
  )
}

export default Brand