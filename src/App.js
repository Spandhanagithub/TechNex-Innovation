import React from 'react';
import './App.css';
import ProductTable from './Component/Productlist'; // Adjust the import path

function App() {
  // Assuming you have the data stored in a variable called 'data'
  const data = {
    // ... (the provided data)
  };

  return (
    <div className="App">
      <h1>Product Table</h1>
      <ProductTable products={data.products} />
    </div>
  );
}

export default App;
