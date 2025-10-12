import React from 'react';
import '../styles/CompanyNews.css';
import BgImage from '../assets/news-bg.png';
import Image7 from '../assets/image-8.png';     
import Image8 from '../assets/image-9.png';     
import { RiArrowRightSLine } from "react-icons/ri";

const newsData = [
  {
    img: Image7,
    title: "Crosson Holding’s 58th ordinary general assembly convened",
    description: "Toffee sweet roll caramels oat cake lemon drops cupcake sweet roll halvah ice cream.",
    link: "/news/assembly"
  },
  {
    img: Image8,
    title: "Crosson Holding’s new Board of Directors has been determined.",
    description: "Toffee sweet roll caramels oat cake lemon drops cupcake sweet roll halvah ice cream.",
    link: "/news/director"
  }
];

const CompanyNews = () => {
  return (
    <section 
      className="news-container"
      style={{ backgroundImage: `url(${BgImage})` }}
    >
      <h1>COMPANY NEWS</h1>
      <h2>News from <span className="highlight">Crosson</span></h2>
      <p>
        Cake pudding lollipop pastry cupcake chocolate. Gummi bears halvah sesame snaps chocolate cake gummies sugar plum cotton candy cupcake sweet
      </p>

      <div className="news-grid">
        {newsData.map((news, index) => (
          <article key={index} className="news-item">
            <div className="news-img">
              <img src={news.img} alt={news.title} />
            </div>
            <div className="news-content">
              <h3>{news.title}</h3>
              <p>{news.description}</p>
              <a href={news.link} className="news-btn">
                Read More <RiArrowRightSLine className="arrow-icon" />
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default CompanyNews;