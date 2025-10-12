import React from "react";
import "./Pricing.css";
import { Link } from "react-router-dom";
import { IoMdCheckmarkCircle } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";

const Pricing = () => {
  return (
    <div className="pricing-page">
      <div className="pricing-header">
        <h2>Pricing</h2>
        <p className="breadcrumb">Home &gt; Corporate &gt; Pricing</p>
        <h3 className="intro">
          At the roots of Crosson, there is 20 years of experience in the food industry
          that is filled with research, increasing efficiency and producing
          solutions for{" "}
          <Link to="/aboutus#quality-certificate" className="highlight">
            food, quality, automation and software
          </Link>.
        </h3>
        <p className="desc">
          Toffee jelly caramels macaroon bonbon dragée muffin halvah. Pudding icing gingerbread sugar plum powder marzipan. Cotton candy carrot cake pastry carrot cake jelly danish. Ice cream muffin marshmallow sesame snaps pie cupcake tart. Lemon drops macaroon lemon drops chocolate cookie cupcake marshmallow donut. Cotton candy candy canes cake oat cake jelly.
        </p>
      </div>

      <div className="pricing-cards">
        <div className="card">
          <h3 className="card-border">BASIC</h3>
          <h1>$29<span>/per month</span></h1>
          <p>Biscuit biscuit halvah soufflé gummi bears jelly beans</p>
          <ul>
            <li><IoMdCheckmarkCircle className="check-icon"/>Upgraded profile</li>
            <li><IoMdCheckmarkCircle className="check-icon"/>Multi-shot & video</li>
            <li><IoMdCheckmarkCircle className="check-icon"/>Instant creative portfolio</li>
            <li><IoMdCheckmarkCircle className="check-icon"/>Team profile and members</li>
            <li><IoMdCheckmarkCircle className="check-icon"/>Sell goods</li>
          </ul>
          <button>Get Started $29 <IoIosArrowForward /></button>
        </div>

        <div className="card">
          <h3 className="card-border">STANDARD</h3>
          <h1>$49<span>/per month</span></h1>
          <p>Biscuit biscuit halvah soufflé gummi bears jelly beans</p>
          <ul>
            <li><IoMdCheckmarkCircle className="check-icon"/>Upgraded profile</li>
            <li><IoMdCheckmarkCircle className="check-icon"/>Multi-shot & video</li>
            <li><IoMdCheckmarkCircle className="check-icon"/>Instant creative portfolio</li>
            <li><IoMdCheckmarkCircle className="check-icon"/>Team profile and members</li>
            <li><IoMdCheckmarkCircle className="check-icon"/>Sell goods</li>
          </ul>
          <button>Get Started $49 <IoIosArrowForward /></button>
        </div>

        <div className="card ">
          <h3 className="card-border">PROFESSIONAL</h3>
          <h1>$59<span>/per month</span></h1>
          <p>Biscuit biscuit halvah soufflé gummi bears jelly beans</p>
          <ul>
            <li><IoMdCheckmarkCircle className="check-icon"/>Upgraded profile</li>
            <li><IoMdCheckmarkCircle className="check-icon" />Multi-shot & video</li>
            <li><IoMdCheckmarkCircle className="check-icon"/>Instant creative portfolio</li>
            <li><IoMdCheckmarkCircle className="check-icon"/>Team profile and members</li>
            <li><IoMdCheckmarkCircle className="check-icon"/>Sell goods</li>
          </ul>
          <button>Get Started $59 <IoIosArrowForward /></button>
        </div>

        <div className="card">
          <h3 className="card-border">EXCLUSIVE</h3>
          <h1>$99<span>/per month</span></h1>
          <p>Biscuit biscuit halvah soufflé gummi bears jelly beans</p>
          <ul>
            <li><IoMdCheckmarkCircle className="check-icon"/>Upgraded profile</li>
            <li><IoMdCheckmarkCircle className="check-icon"/>Multi-shot & video</li>
            <li><IoMdCheckmarkCircle className="check-icon"/>Instant creative portfolio</li>
            <li><IoMdCheckmarkCircle className="check-icon"/>Team profile and members</li>
            <li><IoMdCheckmarkCircle className="check-icon" />Sell goods</li>
          </ul>
          <button>Get Started $99 <IoIosArrowForward /></button>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
