import React from 'react';
import '../styles/Hero.css';
import heroImage from "../assets/hero-background.png";
import phone from '../assets/phone.png';
import { MdKeyboardArrowRight } from "react-icons/md";


function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1 className="hero-content">
          We make Filling & Packaging<br /> Machine for <span className="highlight">Food Industry</span>
        </h1>
        <p className="hero-subtitle">
          With our flexible production capacity and high technology, we produce <br />customized solutions for your needs.
      
        </p>
        <div className="hero-actions">
          <button className="hero-button">Our Products <MdKeyboardArrowRight /></button>
          <a href="#contact" className="hero-contact">
            <span role="img" aria-label="phone"><img src={phone} alt="Phone" /></span>
            Sales Department<br />+(850) 544 7514
          </a>
        </div>
      </div>
      {/* <div className="hero-image">
        <img 
          src={heroImage} 
          alt="Girl with milk giving thumbs up in a kitchen" 
        />
      </div> */}
    </section>
    
  )
}

export default Hero