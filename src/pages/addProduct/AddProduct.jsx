import React, { useState } from 'react';
import "./AddProduct.scss";

function AddProduct() {
  const [productName, setProductName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [username, setUsername] = useState('JohnDoe'); // Assume you get this from user profile
  const [contactNumber, setContactNumber] = useState('');
  const [images, setImages] = useState([]);

  const handleImageChange = (e) => {
    const files = Array.from(e.target.files);
    const previewImages = files.map(file => URL.createObjectURL(file));
    setImages(previewImages);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here, e.g., send data to an API
  };

  return (
    <div className="add-product">
      <h2>Add Product</h2>
      <div className="form-container">
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Product Name</label>
            <input 
              type="text" 
              value={productName} 
              onChange={(e) => setProductName(e.target.value)} 
              required 
            />
          </div>
          <div className="form-group">
            <label>Description</label>
            <textarea 
              value={description} 
              onChange={(e) => setDescription(e.target.value)} 
              required 
            />
          </div>
          <div className="form-group">
            <label>Price</label>
            <input 
              type="number" 
              value={price} 
              onChange={(e) => setPrice(e.target.value)} 
              required 
            />
          </div>
          <div className="form-group">
            <label>Contact Number</label>
            <input 
              type="tel" 
              value={contactNumber} 
              onChange={(e) => setContactNumber(e.target.value)} 
              required 
            />
          </div>
          <button type="submit">Add Product</button>
        </form>
        <div className="image-upload">
          <label>Images</label>
          <input 
            type="file" 
            accept="image/*" 
            multiple 
            onChange={handleImageChange} 
          />
          <div className="image-preview">
            {images.map((image, index) => (
              <img key={index} src={image} alt={`Product Preview ${index}`} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddProduct;
