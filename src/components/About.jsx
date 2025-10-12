import React from 'react'
import '../styles/About.css'
import globeIcon from '../assets/globe-icon.png';
import backgroundImage from '../assets/about-bg.png';
import fillingIcon from '../assets/ft1-icon.png';
import jarIcon from '../assets/jar-icon.png';
import arrowIcon from '../assets/arrow-icon.png';
import specialIcon from '../assets/ft5-icon.png';
import endLineIcon from '../assets/ft2-icon.png';
import softwareIcon from '../assets/ft3-icon.png';
import supportIcon from '../assets/ft4-icon.png';
import { RiArrowRightSLine } from "react-icons/ri";
import Watch from "../assets/watch-icon.png";


function About() {
  const stats = [
    { label: "Exported to 24 Countries", icon: globeIcon, description: "168 companies in 24 countries use our machines" },
    { label: "8 Billion Products Per Day", icon: jarIcon, description: "8 billion products are produced daily from our machines." },
    { label: "We touch 850 million people a day", icon: arrowIcon, description: "850 million people use products made by their machines every day" },
 ];

  const footerIcons = [
    { label: "Filling & Packaging Machinery", icon: fillingIcon },
    { label: "End of Line Solutions", icon: endLineIcon },
    { label: "Food Industry Machines Software", icon: softwareIcon },
    { label: "7/24 Technical Support", icon: supportIcon },
    { label: "Special Solution", icon: specialIcon },
  ];

  return (
    <section className="about" style={{ backgroundImage: `url(${backgroundImage})` }}>
      <div className="about-content">
        <div className="about-section">
          <h3 className="about-section-title">
            WHO WE ARE
          </h3>
          <h2 className="about-title">
          Crosson is an imternational group dedicated to the <span className="highlight">food industry</span>.
          </h2>
          <p className="about-description">
            Crosson has twenty years' experience in the food, quality, automation  and software which has been established in the food sector for Research,efficiency and Solution Production.  
          </p>
          <p className="about-description">
            we are not long to discover that supported to knowledge by specific perspectives, would be the solution to the real needs of the sector. 
          </p>
        </div>

        <div className="about-stats">
          {stats.map((stat, index) => (
            <div key={index} className="about-stat">
              <img src={stat.icon} alt={stat.label} />
              <p className="stat-label">{stat.label}</p>
              <p className="stat-description">{stat.description}</p>
            </div>
          ))}
        </div>

        <div className="about-actions">
          <button className="about-button">About Us<RiArrowRightSLine /></button>
          <a href="/quality-certificates" className="about-link">Quality certificates </a>
        </div>
      </div>
      
      <div className="about-subsection">
        <div className="about-text">
          <h3 className="about-section-title">
            WHAT WE DO
          </h3>
          <h2 className="about-subsection-title">
            With our flexible production capacity and<b /> high technology, we <span className="highlight">produce customised</span><br /> solutions for your needs.
          </h2>
        </div>
        
        <div className="about-subsection-button">
          <img src={Watch} alt="Watch icon" />
          Watch our machines<br /> <span>2.34Min, 14.7MB</span>
        </div>
      </div>

      <div className="about-footer-icons">
        {footerIcons.map((item, index) => (
          <div key={index} className="footer-icon-card">
            <img src={item.icon} alt={item.label} className="footer-icon" />
            <p className="footer-icon-label">{item.label}</p> 
          </div>
        ))}
      </div>
    </section>
  );
}

export default About

