import React, { useState, useEffect } from "react";
import axios from "axios";

const getProducts = async () => {
  try {
    const response = await axios.get(
      "http://localhost:3000/product/api/products"
    );
    return response.data;
  } catch (error) {
    // Handle errors here
    console.error("Error fetching products:", error);
    return [];
  }
};

function Index() {
  const [products, setProducts] = useState([]);
  if (products == []) {
    setProducts("123");
    console.log(products);
  }

  useEffect(() => {
    async function fetchData() {
      const productData = await getProducts();
      setProducts(productData);
    }
    fetchData();
  }, [products]); // The empty array [] ensures this effect runs once, like componentDidMount

  return (
    <div>
      {products.map((product, index) => (
        <div key={index}>{product.name}</div>
      ))}
    </div>
  );
}

export default Index;
