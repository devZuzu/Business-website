import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import Services from './pages/Services';
import ContactUs from './pages/ContactUs';
import ContactUs2 from './pages/ContactUs2';
import OurTeam from './pages/OurTeam';
import Pricing from './pages/Pricing';
import Product from './pages/Product';
import ProductDetail from './pages/ProductDetail';
import News from './pages/News';
import NewsDetail from './pages/NewsDetail';
import Footer from './components/Footer'; 
import './index.css';


function App() {
  return (
    <div className="app">
      <Navbar />
      
      <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/AboutUs" element={<AboutUs />} />
            <Route path="/Services" element={<Services />} />
            <Route path="/ContactUs" element={<ContactUs />} />
            <Route path="/contact-us2" element={<ContactUs2 />} />
            <Route path="/OurTeam" element={<OurTeam />} />
            <Route path="/Pricing" element={<Pricing />} />
            <Route path="/Product" element={<Product />} />
            <Route path="/ProductDetail" element={<ProductDetail />} />
            <Route path="/News" element={<News />} />
            <Route path="/NewsDetail" element={<NewsDetail />} />
          </Routes>
        </main>

      <Footer />
    </div>
  );
}

export default App;
