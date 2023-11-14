// ProductList.jsx
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './YourOwnCSS.css'; // Adjust this path based on your file structure
import ProductTable from './ProductTable';

const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Fetch data from the API when the component mounts
    axios.get('https://dummyjson.com/products/')
      .then(response => setProducts(response.data.products))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/products">Products Table[click]</Link>
            </li>
            {/* Add more navigation links as needed */}
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<h2>Home</h2>} />
          <Route path="/products" element={<ProductTable products={products} />} />
          {/* Add more routes as needed */}
        </Routes>
      </div>
    </Router>
  );
};

export default ProductList;
