import React, { useState, useEffect } from "react";
import "./ProductDetail.css";
import { FaPhone, FaEnvelope, FaCalendarAlt, FaFileDownload, FaRegImage } from "react-icons/fa";
import pdfIcon from '../assets/pdf-icon.png';
import { IoMdCheckmark } from "react-icons/io";
import  CalenderIcon from "../assets/calender-icon.png";
import { GoDotFill } from "react-icons/go";

const ProductDetail = () => {
  const images = [
    "https://via.placeholder.com/800x400?text=Machine+1",
    "https://via.placeholder.com/800x400?text=Machine+2",
    "https://via.placeholder.com/800x400?text=Machine+3",
  ];

  const [current, setCurrent] = useState(0);

  // Auto slide every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [images.length]);

  return (
    <div className="product-detail-page">
      <div className="product-header">
        <h1>Products Detail</h1>
        <p className="breadcrumb">Home &gt; Products &gt; Products Detail</p>
      </div>

      <h3 className="intro-text">
        Since our machines are produced in compliance with the difficult conditions that can be
        operated 24/7, the <span className="highlight">possibility of malfunction are very low.</span>
      </h3>
      <p className="intro-paragraph">Donut candy shortbread toffee dragée apple pie brownie. Muffin chocolate halvah bonbon gummies cake apple pie. Croissant dessert candy canes chocolate bar topping jujubes cupcake toffee dragée. Fruitcake danish tart gummies tootsie roll dragée cheesecake jujubes. Fruitcake powder marzipan dessert dessert oat cake candy. Sweet roll sweet roll gummi bears tootsie roll dragée. Candy canes brownie danish pudding jelly gummies. </p>

      <div className="product-layout">
        {/* Left: Image Slider */}
        <div className="product-image">
          <div className="slider">
            <img src={images[current]} alt="Product" className="slide-image" />

            {/* Center icon + text overlay */}
            <div className="image-overlay">
              <FaRegImage className="image-icon" />
              <p>PHOTO HERE</p>
            </div>

            {/* Dots navigation */}
            <div className="dots">
              {images.map((_, index) => (
                <span
                  key={index}
                  className={`dot ${index === current ? "active-dot" : ""}`}
                  onClick={() => setCurrent(index)}
                ></span>
              ))}
            </div>
          </div>
        </div>

        {/* Right: Contact Section */}
        <div className="contact-section">
          <h3>Are you interested? Contact our<br />
          sales department now</h3>
          <p><FaPhone className="icon" /><strong>Ertan Giris</strong> - Sales Manager</p>
          <p> +90(506) 544 7514</p>
          <p><FaEnvelope className="icon" /> Sales Dpartment <br /> sales@crosser.com</p>

          <div className="meeting-box">
            
            <div className="meeting">
              <h4 className="">Let's Plan an<br /> Online Meeting</h4>
              <p>We are Available Now <GoDotFill className="dot" /></p>
            </div>
            <img src={CalenderIcon} alt="calender icon"  className="calender-icon" />
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="tabs">
        <button >Product Overview</button>
        <button>Technical Data</button>
        <button>Applications</button>
        <button>Gallery</button>

        <div className="download">
          Download PDF <img src={pdfIcon} alt="pdf icon" />
        </div>
      </div>

      {/* Description */}
      <div className="product-info">
        <h2>Filling & Packaging Machines</h2>
        <p>
          Donut candy shortbread toffee dragée apple pie brownie. Muffin chocolate halvah bonbon gummies cake apple pie. Croissant dessert candy canes chocolate bar topping jujubes cupcake toffee dragée. Fruitcake danish tart gummies tootsie roll dragée cheesecake jujubes. 
        </p>
        <p>
          Fruitcake powder marzipan dessert dessert oat cake candy. Sweet roll sweet roll gummi bears tootsie roll dragée. Candy canes brownie danish pudding jelly gummies. 
        </p>

        <ul>
          <li><IoMdCheckmark /> Danish lemon drops sweet soufflé jelly-o wafer gingerbread muffin.</li>
          <li><IoMdCheckmark /> Marshmallow caramels chocolate jelly sweet roll jelly beans cake sweet.</li>
          <li><IoMdCheckmark /> Donut pastry apple pie ice cream dragée cheesecake.</li>
        </ul>
      </div>
    </div>
  );
};

export default ProductDetail;
