import React from 'react';
import '../styles/Footer.css';
import { FaPhone, FaMapMarkerAlt } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import { FaArrowRight } from 'react-icons/fa';
import BackgroundImage from '../assets/footer-background.png';
import CloudIcon from '../assets/cloud-icon.png';



const Footer = () => {
  return (
    <footer style={{ backgroundImage: `url(${BackgroundImage})` }}>
      <div className="footer-container">
        <div className="footer-header">
          {/* Header */}
          <div className="contact-header">
            <h2>Have <span className="highlight">any questions?</span></h2>
            <h2>Contact Us</h2>
          </div>

          {/* Contact info */}
          <div className="contact-info">
            <div className="contact-item">
              <FaPhone />
              <p>+1 (850) 544 7514</p>
            </div>
            <div className="contact-item">
              <MdEmail />
              <p>hello@crosson.com</p>
            </div>
            <div className="contact-item">
              <FaMapMarkerAlt />
              <p>
                Headquarters<br />
                One Apple Park Way, Cupertino<br />
                CA 95014 U.S.A.<br />
                <a src="/" className="direction-link" >Get Direction </a>
              </p>
            </div>
          </div>
        </div>

        {/* Footer sections */}
        <div className="footer-sections">
          <div className="footer-column">
            <h3>Products</h3>
            <ul>
              <li>Filling Machines</li>
              <li>Bottle Filling Series</li>
              <li>Package Machines</li>
              <li>Linear Machines</li>
              <li>Rotary Machines</li>
            </ul>
          </div>

          <div className="footer-column">
            <h3>Solutions</h3>
            <ul>
              <li>End of Line Solutions</li>
              <li>Food Industry Machines Software</li>
              <li>Research Solutions</li>
              <li>Conveyor Solutions</li>
              <li>Special Solutions Your Needs</li>
            </ul>
          </div>

          <div className="footer-column">
            <h3>Corporate</h3>
            <ul>
              <li>About Us</li>
              <li>Our Values</li>
              <li>Human Resources</li>
              <li>News</li>
              <li>Contact</li>
            </ul>
          </div>

          {/* Cloud icon in between */}
          {/* <div className="footer-column cloud-column">
            <img src={CloudIcon} alt="Cloud Icon" className="cloud-icon" />
          </div> */}

          {/* Career column */}
          <div className="footer-column career">
            <div className="footer-column cloud-column">
              <img src={CloudIcon} alt="Cloud Icon" className="cloud-icon" />
            </div>
            <div className="footer-column career-text">
            <h3>Career Opportunities</h3>
            <p>
              Cake pudding lollipop pastry cupcake chocolate.
              Gummi bears halvah sesame snaps.
            </p>
            <button className="opening-positions">
              Opening Positions <span>›</span>
            </button>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="footer-bottom">
          <p className="p1">Copyright by Erkan Giris | All rights reserved</p>
          <p className="p2">
            Our Privacy and Personal Data Protection Policy | Terms and Conditions of Use
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;