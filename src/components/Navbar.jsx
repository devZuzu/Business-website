import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import { FaLinkedin, FaFacebook, FaTwitter } from "react-icons/fa";
import "../styles/Navbar.css";
import Phone from "../assets/phone.png";
import Flag from "../assets/flag.png";
import { RiArrowDownSLine } from "react-icons/ri";


const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
 
  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      {/* === TOP NAVBAR === */}
      <div className="top-navbar">
        <div className="top-left">
          <img src={Phone} alt="Phone Icon" className="phone-icon" />
          <div className="help-text">
            <p>Do you need help?</p>
            <span>+0(850) 544 7514</span>
          </div>
        </div>

        <div className="top-center">
          <h2 className="top-logo">Crosson</h2>
        </div>

        <div className="top-right">
          <div className="social-icons">
            <a href="/" className="social-icon"><FaLinkedin /></a>
            <a href="/" className="social-icon"><FaFacebook /></a>
            <a href="/" className="social-icon"><FaTwitter /></a>
          </div>
          <div className="language-selector">
            <img src={Flag} alt="Flag" className="flag" />
            <span>English</span>
          </div>
        </div>
      </div>

      {/* === MAIN NAVBAR === */}
      <nav className="main-navbar">
        <button 
        className="menu-toggle" onClick={toggleMenu}>
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>

        <ul className={`nav-links ${menuOpen ? "active" : ""}`}>
          <li><Link to="/Product" onClick={closeMenu}>Products<RiArrowDownSLine /></Link></li>
          <li><Link to="/" onClick={closeMenu}>Solutions</Link></li>
          <li><Link to="/" onClick={closeMenu}>Softwares</Link></li>
          <li><Link to="/services" onClick={closeMenu}>Services</Link></li>
          <li><Link to="/AboutUs" onClick={closeMenu}>Corporate</Link></li>
          <li><Link to="/News" onClick={closeMenu}>News</Link></li>
          <li><Link to="/ContactUs" onClick={closeMenu}>Contact</Link></li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
