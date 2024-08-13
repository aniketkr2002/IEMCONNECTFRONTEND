import { Link } from "react-router-dom";
import "./card.scss";

function Card({ item }) {
  return (
    <div className="card">
      <Link to={`/${item.productId}`} className="imageContainer">
        <img src={item.images} alt="" />
      </Link>
      <div className="textContainer">
        <h2 className="title">
          <Link to={`/${item.productId}`}>{item.productName}</Link>
        </h2>
        <p className="address">
          {/* <img src="/pin.png" alt="" /> */}
          <span>{item.description}</span>
        </p>
        <p className="price">$ {item.price}</p>
        <div className="bottom">
          <div className="features">
            <div className="feature">
              {/* <img src="/bed.png" alt="" /> */}
              <span>Contact No - {item.contactNo} </span>
            </div>
            <div className="feature">
              {/* <img src="/bath.png" alt="" /> */}
              <span>Username - {item.userName} </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
