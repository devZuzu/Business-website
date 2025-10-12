import React from 'react';
import '../styles/Services.css';
import Image4 from '../assets/image-4.png';
import Image5 from '../assets/image-5.png';
import Image6 from '../assets/image-6.png';
import { RiArrowRightSLine } from "react-icons/ri";


const servicesData = [
  {
    img: Image4,
    title: "Product Design",
    description: "Toffee sweet roll caramels oat cake lemon drops cupcake sweet roll halvah ice cream.",
    link: "/services/design"
  },
  {
    img: Image5,
    title: "Planning & Production",
    description: "Center we have developped many patents in filling and packaging technology.",
    link: "/services/planning"
  },
  {
    img: Image6,
    title: "Installation & Commissioning",
    description: "Marshmallow pastry jelly beans chocolate bar cake pastry powder gummi bears. ",
    link: "/services/installation"
  }
];

const Services = () => {
  return (
    <section className="container services-section">
      <h4 className="service-section-title">HOW WE DO</h4>
      <h2>A journey from <span className="highlight">design to product.</span></h2>
      <p>
        Starting from the planning of the product our customer wants; design, manufacturing, software, mounting, installation & comissioning are made by us.
      </p>

      <div className="services">
        {servicesData.map((service, index) => (
          <article key={index} className="service">
            <img src={service.img} alt={service.title} />
            <h3>{service.title}</h3>
            <p>{service.description}</p>
            <a href={service.link} className="read-more">Read More <RiArrowRightSLine  className="arrow-icon" /></a>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Services;