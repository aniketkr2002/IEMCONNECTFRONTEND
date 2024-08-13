import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import "./MyProduct.scss";
import { productList } from "../../lib/dummydata.js";
import { useAuth } from '../../context/AuthContext.jsx';
import apiRequest from '../../lib/apiRequest.js';

function MyProduct() {
    // const data = productList;

  const [error, setError] = useState("Loading...");
  const [data, setData] = useState(null);
  const {currentUser} = useAuth();
  

  const getData = async() => {
    try {
      const res = await apiRequest.get(`product/get/${currentUser.userName}`);
      // console.log(res.data);
      setData(res.data);
      
    } catch (err) {
      console.log(err.message);
      setError(err.message);
    }
  }

  useEffect(() => {
   getData();
  }, [])



  return !data? 
  <span>{error}</span>:(
    <div className="my-products">
      {data.map((item) => (
        <div className="card" key={item.productId}>
          <Link to={`/${item.productId}`} className="imageContainer">
            <img src={item.images} alt={item.productName} />
          </Link>
          <div className="textContainer">
            <h2 className="title">
              <Link to={`/${item.productId}`}>{item.productName}</Link>
            </h2>
            <p className="description">{item.description}</p>
            <p className="price">$ {item.price}</p>
            <div className="bottom">
              <div className="feature">Contact No - {item.contactNo}</div>
              <div className="feature">Username - {item.userName}</div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default MyProduct;
