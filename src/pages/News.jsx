import React from "react";
import "./News.css";
import News1 from "../assets/news1.png";
import News2 from "../assets/news2.png";
import News3 from "../assets/news3.png";
import News4 from "../assets/news4.png";
import News5 from "../assets/news5.png";
import News6 from "../assets/news6.png";
import { RiArrowRightSLine } from "react-icons/ri";
import { Link } from "react-router-dom";

const newsItems = [
  {
    id: 1,
    image: News1,
    title: "Crosson Holding's 58th ordinary general assembly convened",
    text: "Toffee sweet roll caramels oat cake lemon drops cupcake sweet roll halvah ice cream.",
  },
  {
    id: 2,
    image: News4,
    title: "Crosson Holding's new Board of Directors has been determined.",
    text: "Toffee sweet roll caramels oat cake lemon drops cupcake sweet roll halvah ice cream.",
  },
  {
    id: 3,
    image: News2,
    title: "Crosson Holding's 58th ordinary general assembly convened",
    text: "Toffee sweet roll caramels oat cake lemon drops cupcake sweet roll halvah ice cream.",
  },
  {
    id: 4,
    image: News5,
    title: "Crosson Holding's new Board of Directors has been determined.",
    text: "Toffee sweet roll caramels oat cake lemon drops cupcake sweet roll halvah ice cream.",
  },
  {
    id: 5,
    image: News3,
    title: "Crosson Holding's 58th ordinary general assembly convened",
    text: "Toffee sweet roll caramels oat cake lemon drops cupcake sweet roll halvah ice cream.",
  },
  {
    id: 6,
    image: News6,
    title: "Crosson Holding's new Board of Directors has been determined.",
    text: "Toffee sweet roll caramels oat cake lemon drops cupcake sweet roll halvah ice cream.",
  },
];

const News = () => {
  return (
    <div className="news-page">
      <div className="news-header">
        <h1>News</h1>
        <p>Home &gt; News</p>
      </div>

      <div className="news-grid">
        {newsItems.map((item) => (
          <div key={item.id} className="news-card">
            <img src={item.image} alt={item.title} />
            <div className="news-content">
              <h3>{item.title}</h3>
              <p>{item.text}</p>
              <Link to="/NewsDetail">
                    <button className="read-more">Read More <RiArrowRightSLine /></button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default News;
