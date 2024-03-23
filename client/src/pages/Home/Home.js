import React, { useState, useEffect } from "react";
import axios from "axios";
import ProductCard from "../../components/ProductCard/ProductCard";

const Home = ({ products }) => {
  return (
    <>
      <div className="homePage">
        {products.map((product) => (
          <ProductCard key={product.itemId} product={product} />
        ))}
      </div>
    </>
  );
};

export default Home;
