// src/pages/AboutUs.jsx
import React from "react";
import "./AboutUs.css";

const AboutUs = () => {
  const partners = [
    "/images/partner1.png",
    "/images/partner2.png",
    "/images/partner3.png",
    "/images/partner4.png",
  ]; // just 3–4 partner logos

  return (
    <div className="about-page">
      {/* Section 1: About Us */}
      <section className="about-intro">
        <h1>About Us</h1>
        <p>Home &gt; News</p>
        <p>
          At the roots of Crosson, there is 20 years of experience in the food
          industry that is filled with research, increasing efficiency, and
          producing solutions for{" "}
          <span className="highlight">
            food, quality, automation and software.
          </span>
        </p>
        <p>
          We are committed to delivering innovative solutions that combine
          technology and expertise, ensuring continuous improvement and
          excellence in the food production industry.
        </p>
      </section>

      {/* Section 2: Our Values */}
      <section className="about-values">
        <div className="values-text">
          <h2>
            Crosson has adopted Quality Production as its{" "}
            <span className="highlight">basic principle.</span>
          </h2>
          <p>
            We strive to be one of the pioneering, dynamic, and leading
            companies that provide quality products and services with a
            dedication to continuous improvement.
          </p>
          <a href="/" className="link">
            Quality Certificates
          </a>
        </div>

        <div className="values-cards">
          <div className="card">
            <img src="/images/mission.jpg" alt="Mission" />
            <h3>Our Mission</h3>
            <p>
              We have developed many patents in filling and packaging
              technology.
            </p>
            <a href="/" className="link">
              Read More
            </a>
          </div>
          <div className="card">
            <img src="/images/vision.jpg" alt="Vision" />
            <h3>Our Vision</h3>
            <p>
              Manufacturing pastry, jelly beans, chocolate bars, cakes, and
              gummy bears with world-class quality.
            </p>
            <a href="/" className="link">
              Read More
            </a>
          </div>
        </div>
      </section>

      {/* Section 3: Partners */}
      <section className="about-partners">
        <h2>
          Ask our <span className="highlight">happy customers</span> about our quality
        </h2>
        <p>
          We collaborate with trusted partners and valued customers who share
          our commitment to quality and innovation.
        </p>

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
