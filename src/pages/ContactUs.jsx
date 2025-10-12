import React from 'react'
import './ContactUs.css';
import { MdArrowForwardIos } from "react-icons/md";
import { Link } from "react-router-dom";


const ContactUs = () => {
  return (
    <div className="contact-page">
      <div className="contact-header">
        <h1>Contact Us</h1>
        <p className="breadcrumb">Home &gt; Contact Us</p>
        <h3 className="contact-intro">
          Interested in our <span className="highlight">Machine & Software</span> services or need advice?
          Then please<br /> get in touch and we’ll be glad to help.
        </h3>
      </div>

      <div className="contact-cards">
        {/* Contact Information */}
        <div className="contact-card">
          <h3>Contact Informations</h3>
          <p>Get in touch and let us know how we can help</p>

          <div className="contact-details">
            <p><strong>PHONE:</strong><br /> +0(850) 544 7514</p>
            <p><strong>MAIL:</strong><br /> hello@crossan.com</p>
            <p><strong>ADDRESS:</strong><br /> One Apple Park Way, Cupertino CA 95014, U.S.A.</p>
          </div>

          <button className="btn yellow-btn">Get Direction <MdArrowForwardIos /></button>
          <a href="#" className="link">See on Map</a>
        </div>

        {/* Technical Support */}
        <div className="contact-card">
          <h3>Technical Support</h3>
          <p>You can reach our technical support team 24/7</p>

          <div className="contact-details">
            <p><strong>SUPPORT PHONE:</strong><br /> +0(850) 544 7514</p>
            <p><strong>SUPPORT MAIL:</strong><br /> hello@crossan.com</p>
            <p><strong>SUPPORT REQUEST FORM:</strong><br /> Caramels cake marshmallow cheesecake shortbread soufflé</p>
          </div>
          <Link to="/contact-us2">
                <button className="btn yellow-btn">Request Form <MdArrowForwardIos /></button>
          </Link>
        </div>

        {/* Satisfaction Survey */}
        <div className="contact-card">
          <h3>Satisfaction Survey</h3>
          <p>Use the “Service Evaluation” code to make an evaluation</p>

          <div className="contact-details">
            <p><strong>WHERE TO FIND MY CODE?</strong><br />
              The Service Evaluation code will be provided after the service is performed by the technical team.
            </p>
            <p><strong>SUPPORT MAIL:</strong><br /> hello@crossan.com</p>
          </div>

          <button className="btn yellow-btn">Rate Us <MdArrowForwardIos /></button>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;