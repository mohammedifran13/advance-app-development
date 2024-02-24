import  { useState } from 'react';
// import { useDispatch } from 'react-redux';
import '../assets/css/AddYacht.css';
import Navbar from './NavBar';
// import axios from 'axios';

const AddYacht = () => {
  // const dispatch = useDispatch();
  const [productName, setProductName] = useState('');
  const [productPrice, setProductPrice] = useState('');
  const [productStock, setProductStock] = useState('');
  const [productImage, setProductImage] = useState(null);
  const [popupMessage, setPopupMessage] = useState('');

  const handleAddProduct = async (e) => {
    e.preventDefault();

    if (!productImage) {
      setPopupMessage('Please select an image');
      return;
    }

    const formData = new FormData();
    formData.append('file', productImage);
    formData.append('name', productName);
    formData.append('price', productPrice);
    formData.append('stock', productStock);

    try {
      const response = await axios.post('http://127.0.0.1:8080/Yacht', formData);
      setPopupMessage(response.data);
    } catch (error) {
      console.log(error);
      setPopupMessage('Error occurred during product addition');
    }
    setProductImage(null);
    setProductName('');
    setProductPrice('');
    setProductStock('');
  };

  const handlePopupClose = () => {
    setPopupMessage('');
  };

 

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    setProductImage(file);
  };

  return (
    <div className="full">
      <Navbar />
      <div className="vendorContainer">
        <h1 className="vendorTitle">Add Product</h1>
        <div className="vendorForm">
          <input
            type="text"
            placeholder="Ship Name"
            value={productName}
            onChange={(e) => setProductName(e.target.value)}
          />

          

          <input
            type="text"
            placeholder="Price"
            value={productPrice}
            onChange={(e) => setProductPrice(e.target.value)}
          />

          <input
            type="number"
            placeholder="No. of Ticket"
            value={productStock}
            onChange={(e) => setProductStock(e.target.value)}
          />

          <input
            type="file"
            id="productImage"
            className="image-input"
            accept="image/*"
            onChange={handleImageChange}
          />

          <button onClick={handleAddProduct}>Add Product</button>
        </div>
      </div>
      {popupMessage && (
        <div className="popupContainer">
          <div className="popup">
            <p>{popupMessage}</p>
            <button className="popupClose" onClick={handlePopupClose}>
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default AddYacht;