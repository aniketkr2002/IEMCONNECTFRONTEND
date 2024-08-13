import "./ProductListPage.scss";
import React, { useEffect, useState } from "react";
import { productList } from "../../lib/dummydata.js";
import Card from "../../components/card/Card.jsx";
import apiRequest from "../../lib/apiRequest.js";
import { Link } from "react-router-dom";

function ProductListPage() {

  // const [error, setError] = useState("");
  // const [data, setData] = useState(null);

  const data = productList;
  // const getData = async() => {
  //   try {
  //     const res = await apiRequest.get("/product");
  //     // console.log(res.data);
  //     setData(res.data);
      
  //   } catch (err) {
  //     console.log(err);
  //     setError(err.response.data);
  //   }
  // }
  // useEffect(() => {
  //  getData();
  // }, [])

  return !data ? <p>Loading..</p> : (
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
            {/* <p className="description">{item.description}</p> */}
            <p className="price">$ {item.price}</p>
            <div className="bottom">
              {/* <div className="feature">Contact No - {item.contactNo}</div> */}
              {/* <div className="feature">Username - {item.userName}</div> */}
            </div>
          </div>
        </div>
      ))}
    </div>
    // <div className='listPage'>
    //   <div className="listContainer">
    //     <div className='wrapper'>
    //       {/* <Filter/> */}
    //       {data.map(item => (
    //         <Card key={item.productId} item={item}/>            
    //       ))}
    //     </div>
    //   </div>
    // </div>
  )
}

export default ProductListPage;
