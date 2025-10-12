// src/pages/AboutUs.jsx
import React from "react";
import "./AboutUs.css";
import { Link } from "react-router-dom";
import image5 from "../assets/image-5.png";
import image6 from "../assets/image-6.png";
import partner1 from "../assets/partner1.png";
import partner2 from "../assets/partner2.png";
import partner3 from "../assets/partner3.png";
import partner4 from "../assets/partner4.png";
import partner5 from "../assets/partner5.png";
import partner6 from "../assets/partner6.png";
import partner7 from "../assets/partner7.png";
import partner8 from "../assets/partner8.png";
import partner9 from "../assets/partner9.png";
import partner10 from "../assets/partner10.png";
import partner11 from "../assets/partner11.png";
import partner12 from "../assets/partner12.png";
import partner13 from "../assets/partner13.png";
import partner14 from "../assets/partner14.png";
import partner15 from "../assets/partner15.png";
import partner16 from "../assets/partner16.png";
import partner17 from "../assets/partner17.png";
import partner18 from "../assets/partner18.png";
import partner19 from "../assets/partner19.png";
import partner20 from "../assets/partner20.png";
import partner21 from "../assets/partner21.png";
import partner22 from "../assets/partner22.png";


const AboutUs = () => {
  const partners = [
        partner1, partner2, partner3, partner4, partner5, partner6, partner7,
        partner8, partner9, partner10, partner11, partner12, partner13, partner14,
        partner15, partner16, partner17, partner18, partner19, partner20,
        partner21, partner22,
    ];

  return (
    <div className="about-page">
      {/* Section 1: About Us */}
      <section className="about-intro">
        <h1>About Us</h1>
        <p>Home &gt; Corperate &gt; About Us</p>
        <h2>
          At the roots of Crosson, there is 20 years of experience in food industry that is filled with research, increasing efficiency and producing solution for{" "}
          <span className="highlight">
            food, quality, automation and software.
          </span>
        </h2>
        <p>
          Donut candy shortbread toffee dragée apple pie brownie. Muffin chocolate halvah bonbon gummies cake apple pie. Croissant dessert candy canes chocolate bar topping jujubes cupcake toffee dragée. Fruitcake danish tart gummies tootsie roll dragée cheesecake jujubes. Fruitcake powder marzipan dessert dessert oat cake candy. Sweet roll sweet roll gummi bears tootsie roll dragée. Candy canes brownie danish pudding jelly gummies. 
        </p>
        <p>
          Toffee jelly caramels macaroon bonbon dragée muffin halvah. Pudding icing gingerbread sugar plum powder marzipan. Cotton candy carrot cake pastry carrot cake jelly danish. Ice cream muffin marshmallow sesame snaps pie cupcake tart. Lemon drops macaroon lemon drops chocolate cookie cupcake marshmallow donut. Cotton candy candy canes cake oat cake jelly.
        </p>
      </section>

      {/* Section 2: Our Values */}
      <section className="about-values">
        <div className="values-text">
            <h3> OUR VALUES </h3>
          <h2>
            Crosson has adopted<br /> Quality Production as its{" "} <br />
            <span className="highlight">basic principle.</span>
          </h2>
          <p>
            To be one of the pioneering, dynamic and leading companies that offer quality products and services with an understanding of continuous improvement in the fields in which it operates.
          </p>

          <Link to="/Pricing">
                <a href="/Pricing" className="text-link">
                    Quality Certificates
                </a>
          </Link>
        </div>

        <div className="values-cards">
          <div className="card">
            <img src={image5} alt="Mission" />
            <h3>Our Mission</h3>
            <p>
              Center we have
              developped many patents in filling and packaging technology.
            </p>
            <Link to="/OurTeam">
                <a href="/" className="link">
                    Read More 
                </a>
            </Link>
          </div>
          <div className="card">
            <img src={image6} alt="Vision" />
            <h3>Our Vision</h3>
            <p>
              Marshmallow pastry jelly beans chocolate bar cake pastry powder gummi bears. 
            </p>
            <Link to="/OurTeam">
                <a href="/" className="link">
                    Read More
                </a>
            </Link>
          </div>
        </div>
      </section>

      {/* Section 3: Partners */}
      <section className="about-partners">
        <h3>PARTNERS</h3>
        <div className="partners-text">
            <h2>
            Ask our <span className="highlight">happy customers</span><br /> about our quality
            </h2>
            <p className="partners-text-para">
            To be one of the pioneering, dynamic and leading companies that offer quality products and services with an understanding of continuous improvement in the fields in which it operates.<br />
            <span>Erkan Giris, EG Theme</span>
            </p>
            
        </div>

        <div className="partners-logos">
          {partners.map((src, i) => (
            <img key={i} src={src} alt={`Partner ${i + 1}`} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
