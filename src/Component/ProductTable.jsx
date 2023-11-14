
import React from 'react';
import './YourOwnCSS.css';
const ProductTable = ({ products }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Title</th>
          <th>Description</th>
          <th>Price</th>
          <th>Discount Percentage</th>
          <th>Rating</th>
          <th>Stock</th>
          <th>Brand</th>
          <th>Category</th>
          <th>Thumbnail</th>
          <th>Images</th>
        </tr>
      </thead>
      <tbody>
        {products.map(product => (
          <tr key={product.id}>
            <td>{product.id}</td>
            <td>{product.title}</td>
            <td>{product.description}</td>
            <td>{product.price}</td>
            <td>{product.discountPercentage}</td>
            <td>{product.rating}</td>
            <td>{product.stock}</td>
            <td>{product.brand}</td>
            <td>{product.category}</td>
            <td><img src={product.thumbnail} alt={product.title} style={{ width: '50px', height: '50px' }} /></td>
            <td>
              {product.images.map((image, index) => (
                <img key={index} src={image} alt={`Image ${index}`} style={{ width: '50px', height: '50px', marginRight: '5px' }} />
              ))}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ProductTable;
