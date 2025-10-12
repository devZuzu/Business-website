import React from "react";
import './ContactUs2.css';
import { MdArrowForwardIos } from "react-icons/md";
import { Link } from "react-router-dom";

const ContactUs2 = () => {
  return (
    <div className="contact2-page">
      <div className="contact2-container">
        <div className="contact2-header">
          <h1>Contact Us</h1>
          <p className="breadcrumb">Home › Contact Us</p>
        </div>

        <h3 className="intro-text">
          Interested in our <span className="highlight">Machine & Software</span> services or need advice?
          Then please<br /> get in touch and we’ll be glad to help.
        </h3>

        <div className="contact2-content">
          {/* Left side: Contact Information */}
          <div className="contact2-info">
            <h2>Contact Informations</h2>
            <p className="info-desc">
              Get in touch and let us know how<br /> we can help
            </p>

            <div className="info-block">
              <p>
                <strong>PHONE:</strong> <br />
                +0(850) 544 7514
              </p>
              <p>
                <strong>MAIL:</strong> <br />
                hello@crossion.com
              </p>
              <p>
                <strong>ADDRESS:</strong> <br />
                One Apple Park Way, Cupertino CA 95014, U.S.A.
              </p>
            </div>

            <div className="contact2-buttons">
              <button className="btn-yellow">Get Direction <MdArrowForwardIos /></button>
              <button className="btn-link">See on Map</button>
            </div>
          </div>

          {/* Right side: Contact Form */}
          <div className="contact2-form">
            <h2>Contact Form</h2>
            <p className="info-desc">
              Get in touch and let us know how we can help
            </p>

            <form>
              <div className="form-row">
                <input type="text" placeholder="Name Surname" />
                <input type="email" placeholder="E-Mail Address" />
              </div>
              <div className="form-row">
                <input type="text" placeholder="Phone Number" />
                <input type="text" placeholder="Your Company" />
              </div>
              <textarea placeholder="Your Message"></textarea>
              <Link to="/ContactUs">
                    <button type="submit" className="btn-yellow submit-btn">
                      Submit <MdArrowForwardIos />
                    </button>
              </Link>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs2;
