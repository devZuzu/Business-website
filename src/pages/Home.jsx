import React from 'react';
import Hero from '../components/Hero';
import About from '../components/About';
import Features from '../components/Features';
import Services from '../components/Services';
import CompanyNews from '../components/CompanyNews';


const Home = () => {
  return (
    <div>
      <Hero />
      <About />
      <Features />
      <Services />
      <CompanyNews />
    </div>
  )
}

export default Home
