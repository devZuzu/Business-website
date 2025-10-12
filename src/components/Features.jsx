import React from 'react';
import '../styles/Features.css';
import icon1 from '../assets/icon-1.png';
import icon2 from '../assets/phone.png';
import icon3 from '../assets/phone.png';
import image1 from '../assets/image-feature.png';
import image2 from '../assets/image-feature2.png';
import image3 from '../assets/image-feature3.png';


function Features() { 
  const topImages = [ 
    { src: image1, title: "Linear Machines"  },
    { src: image2, title: "Rotary Machine" },
    { src: image3, title: "Bottle Filling Machine" }, 
  ]; 
  
  const sidebarItems = [
    { icon: icon1, label: "Lets Plan our Online Meeting", text: "We are Available Now" },
    { icon: icon2, label: "Erkan Giris / Sales Manager", text: "+(850) 544 7514" },
    { icon: icon3, label: "Sales Department", text: "sales@crosson.com" }, 
  ];

 return (
    <section className="features">
      <div className="features-wrapper">
        <div className="features-main">
          <h3 className="features-section-title">
            Filling & Packaging Machines
          </h3>
          <p>Liquorice lemon drops powder chocolate liqorice candy desert gummi bears. caramels marzipan donut jujubes sweet roll. Powder croissant toffee shortbread chocolate sweet pie. <span>Read More</span> </p>
          {/* <div className="features-icon-area">
            <div className="feature-icon-box">
              <img src={icon1} alt="Features Icon" className="feature-icon" />
              <p className="icon-label"></p>
            </div>
            <div className="feature-icon-stack">
              <img src={icon2} alt="Second Icon" className="feature-icon" />
              <img src={icon3} alt="Third Icon" className="feature-icon" />
            </div>
          </div> */}
          <div className="features-image-row top-images">
            {topImages.map((item, index) => (
              <div key={index} className="image-container">
                <img src={item.src} alt={`${item.title} Image`} className="feature-image" />
                <p className="image-title">{item.title}</p>
                <p className="image-desc">{item.desc}</p>
              </div>
            ))}
          </div>
          
        </div>
        <div className="features-sidebar">
          <h4 className="sidebar-title">Contact & Schedule</h4>
          {sidebarItems.map((item, index) => (
            <div key={index} className="sidebar-item">
              <img src={item.icon} alt={`${item.label} Icon`} className="sidebar-icon" />
              <div className="sidebar-text-group">
                <p className="sidebar-label">{item.label}</p>
                <p className="sidebar-text">{item.text}</p>
              </div>
            </div>
          ))}
          <div className="features-bottom-bar"></div>
        </div>
      </div>
      
    </section>
  );
         
}
       
export default Features;