import React from "react";
import "./NewsDetail.css";
import NewsDetailImage from '../assets/news-detail.png';
import News1 from '../assets/news1.png';
import News4 from '../assets/news4.png';
import { RiArrowRightSLine } from "react-icons/ri";


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
];

const NewsDetail = () => {
  return (
    <div className="news-page">
      {/* Header Section */}
      <div className="news-container">
        <div className="news-header">
        <h1 className="news-title">
          Crosson Holding’s 58th ordinary general<br /> assembly convened
        </h1>
        <p className="breadcrumb">
          Home &gt; News &gt; Crosson Holding’s 58th ordinary general assembly convened
        </p>
       </div>

        {/* Main Image */}
        <div className="news-image">
          <img src={NewsDetailImage} alt="Meeting" />
        </div>

        {/* News Content */}
        <div className="news_contents">
          <h3>
            At the roots of Crosson, there is 20 years of experience in the food
            industry that is filled with research, increasing efficiency and
            producing solutions for{" "}
            <span className="highlight">
              food, quality, automation and software.
            </span>
          </h3>

          <p>
            Donut candy shortbread toffee dragée apple pie brownie. Muffin chocolate halvah bonbon gummies cake apple pie. Croissant dessert candy canes chocolate bar topping jujubes cupcake toffee dragée. Fruitcake danish tart gummies tootsie roll dragée cheesecake jujubes. Fruitcake powder marzipan dessert dessert oat cake candy. Sweet roll sweet roll gummi bears tootsie roll dragée. Candy canes brownie danish pudding jelly gummies. 
          </p>

          <p>
            Toffee jelly caramels macaroon bonbon dragée muffin halvah. Pudding icing gingerbread sugar plum powder marzipan. Cotton candy carrot cake pastry carrot cake jelly danish. Ice ceam muffin marshmallow sesame snaps pie cupcake tart. Lemon drops macaroon lemon drops chocolate cookie cupcake marshmallow donut. Cotton candy candy canes cake oat cake jelly.
          </p>

          <p>
            Muffin chocolate halvah bonbon gummies cake apple pie. Croissant dessert candy canes chocolate bar topping jujubes cupcake toffee dragée. Fruitcake danish tart gummies tootsie roll dragée cheesecake jujubes. Fruitcake powder marzipan dessert dessert oat cake candy. Sweet roll sweet roll gummi bears tootsie roll dragée. Candy canes brownie danish pudding jelly gummies. 
          </p>

          <p>
            Pudding icing gingerbread sugar plum powder marzipan. Cotton candy carrot cake pastry carrot cake jelly danish. Ice cream muffin marshmallow sesame snaps pie cupcake tart. Lemon drops macaroon lemon drops chocolate cookie cupcake marshmallow donut. Cotton candy candy canes cake oat cake jelly.
          </p>
        </div>
      </div>

      {/* Related News Section */}
      <div className="related-section">
        <div className="news-container">
          <h2 className="news-title">Related News</h2>
          <h3 className="news_contents">Cake pudding lollipop pastry cupcake chocolate. Gummi bears halvah sesame snaps chocolate cake gummies sugar plum cotton candy cupcake sweet</h3>

          <div className="related-grid">

            {/* Related Card 2 */}
            <div className="news-grid">
                {newsItems.map((item) => (
                    <div key={item.id} className="news-card">
                        <img src={item.image} alt={item.title} />
                        <div className="news-content">
                            <h3>{item.title}</h3>
                            <p>{item.text}</p>
                            
                            <button className="read-more">Read More<RiArrowRightSLine /></button>
              
                        </div>
                    </div>
                ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsDetail;
