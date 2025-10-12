import React from 'react';
import './Product.css';
import { MdOutlineAddPhotoAlternate } from "react-icons/md";
import { Link } from "react-router-dom";

const Product = () => {
  const products = [
    {
      title: 'Filling & Packaging Machines',
      description:
        'Dough candy streaked-filled sponge cake, Muffin chocolate hazelnut brownie, Gumdrop cake, etc.',
    },
    {
      title: 'Linear Bread Machines',
      description: 'Detailed list of bread machine products.',
    },
    {
      title: 'Rotary Machines',
      description: 'Tailored product examples for rotary machines.',
    },
    {
      title: 'Bottle Warming Machines',
      description: 'Specific product examples for bottle warmers.',
    },
  ];

  return (
    <div className="product-page">
      <header>
        <h1>Our Products</h1>
        <p className="breadcrumb">Home &gt; Corporate &gt; Pricing</p>

        <h3 className="subtitle">Since our machines are produced in compliance with the difficult conditions that can be
        operated 24/7, <span className="highlight">the possibility of malfunction are very low.</span></h3>

        <p className="header-p">Donut candy shortbread toffee dragée apple pie brownie. Muffin chocolate halvah bonbon gummies cake apple pie. Croissant dessert candy canes chocolate bar topping jujubes cupcake toffee dragée. Fruitcake danish tart gummies tootsie roll dragée cheesecake jujubes. Fruitcake powder marzipan dessert dessert oat cake candy. Sweet roll sweet roll gummi bears tootsie roll dragée. Candy canes brownie danish pudding jelly gummies.  </p>
      </header>

      <div className="product-grid">
       {products.map((product, index) => (
    <Link to="/ProductDetail" key={index}>
      <div className="product-card">
        <div className="card-placeholder">
          <span><MdOutlineAddPhotoAlternate /></span>
        </div>
        <h3>{product.title}</h3>
      </div>
    </Link>
  ))}
</div>

    </div>
  );
};

export default Product;
