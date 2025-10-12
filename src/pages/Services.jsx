import React from 'react';
import './Services.css';
import { GiCheckMark } from "react-icons/gi";
import { MdArrowForwardIos } from "react-icons/md";

import amazonLogo from "../assets/amazon-logo.png";
import airbnbLogo from "../assets/airbnb-logo.png";
import asanaLogo from "../assets/asana-logo.png";
import framerLogo from "../assets/framer-logo.png";
import trelloLogo from "../assets/trello-logo.png";
import slackLogo from "../assets/slack-logo.png";
import paypalLogo from "../assets/paypal-logo.png";
import invisionLogo from "../assets/invision-logo.png";
import afterpayLogo from "../assets/afterpay-logo.png";
import gitlabLogo from "../assets/gitlab-logo.png";
import mondayLogo from "../assets/monday-logo.png";
import latticeLogo from "../assets/lattice-logo.png";

import companyIcon from "../assets/company-icon.png";
import storageIcon from "../assets/storage.png";
import salaryIcon from "../assets/salary.png";
import cloudIcon from "../assets/cloud.png";


const Services = () => {
  return (
    <div className="services-page">
      {/* Header Section */}
      <div className="services-header">
        <h1>Services</h1>
        <p className="breadcrumb">Home &gt; Services</p>
      </div>

      {/* Intro Section */}
      <div className="services-intro">
        <h2>
          Since our machines are produced in compliance with the difficult conditions that can be operated 24/7,{" "} <br />
          <span className="highlight">
            the possibility of malfunction are very low.
          </span>
        </h2>
        <p className="dummy-text">
          Donut candy shortbread toffee dragée apple pie brownie. Muffin chocolate halvah bonbon gummies cake apple pie. Croissant dessert candy canes chocolate bar topping jujubes cupcake toffee dragée. Fruitcake danish tart gummies tootsie roll dragée cheesecake jujubes. Fruitcake powder marzipan dessert dessert oat cake candy. Sweet roll sweet roll gummi bears tootsie roll dragée. Candy canes brownie danish pudding jelly gummies. 
        </p>
        <ul>
            <li><GiCheckMark />Danish lemon drops sweet soufflé jelly-o wafer gingerbread muffin.</li>
            <li><GiCheckMark />Marshmallow caramels chocolate jelly-o sweet roll jelly beans cake sweet. </li>
            <li><GiCheckMark />Donut pastry apple pie ice cream dragée cheesecake. </li>
        </ul>
      </div>

      {/* Explore Services */}
      <div className="explore-services">
        <h4>EXPLORE SERVICES</h4>
        <h2>
          We offer high quality machine manufacturing and{" "}
          <span className="highlight">software services</span>
        </h2>
        <p>
          To be one of the pioneering, dynamic and leading companies that offer
          quality products and services with an understanding of continuous
          improvement in the fields in which it operates.
        </p>

        <div className="service-cards">
          <div className="service-card">
            <img src={companyIcon} alt="Company Work Management" />
            <h3>Company Work Management Software</h3>
            <p>
              We have developed many patents in filling and packaging technology.
            </p>
            <a href="#">Read More <MdArrowForwardIos /></a>
          </div>

          <div className="service-card">
            <img src={storageIcon} alt="Storage Service" />
            <h3>Crosson Simple Storage Service (S3)</h3>
            <p>
              Maximum flavor pastry jelly beans chocolate bar cake pastry powder.
            </p>
            <a href="#">Read More <MdArrowForwardIos /></a>
          </div>

          <div className="service-card">
            <img src={salaryIcon} alt="Salary Control" />
            <h3>Machine Access Salary Control Software</h3>
            <p>
              We have developed many patents in filling and packaging technology.
            </p>
            <a href="#">Read More <MdArrowForwardIos /></a>
          </div>

          <div className="service-card">
            <img src={cloudIcon} alt="Cloud Storage" />
            <h3>Scalable Storage in the Cloud Service</h3>
            <p>
              Marshmallow pastry jelly beans chocolate bar cake pastry powder.
            </p>
            <a href="#">Read More <MdArrowForwardIos /></a>
          </div>
        </div>
      </div>

      {/* Partners Section */}
      
      <div className="partners">
        <h4>PARTNERS</h4>
        <h2>
          Crosson, Trusted by over{" "}
          <span className="highlight">1,000 businesses<br /> </span> of all sizes
        </h2>
        <p>
          To be one of the pioneering, dynamic and leading companies that offer
          quality products and services with continuous improvement.
        </p>

        <div className="partners-images">
            <img src={amazonLogo} alt="Amazon" />
            <img src={airbnbLogo} alt="Airbnb" />
            <img src={asanaLogo} alt="Asana" />
            <img src={framerLogo} alt="Framer" />
            <img src={trelloLogo} alt="Trello" />
            <img src={slackLogo} alt="Slack" /> 
            <img src={paypalLogo} alt="PayPal" />
            <img src={invisionLogo} alt="Invision" />
            <img src={afterpayLogo} alt="Afterpay" />
            <img src={gitlabLogo} alt="Gitlab" />
            <img src={mondayLogo} alt="Monday" />
            <img src={latticeLogo} alt="Lattice" />
        </div>
      </div>
    </div>
  );
};

export default Services;
