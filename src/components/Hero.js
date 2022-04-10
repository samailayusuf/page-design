import React from 'react'
import './Hero.css'
import pen from '../images/pen.png'

function Hero() {
  return (
    <div className="hero-container">
    <div className="hero">
      <div id="hero-text">
        <h4 className="light">NOUS VALORISONS LA</h4>
        <h1 className="extend">CLARTE ></h1>
        <p style={{margin:'10px 0 10px 0'}}>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
        </p>
        <p className="button">En Savoir Plus</p>
      </div>
  
      <div id="hero-image">
        <img src={pen} alt="alt"/>
      </div>
    </div>
  </div>
  )
}

export default Hero