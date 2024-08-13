import React, { useContext, useState } from 'react';
import "./Navbar.scss";
import { Link } from "react-router-dom";
import { AuthContext } from '../../context/AuthContext';

function Navbar() {
  const [open, setOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const { currentUser } = useContext(AuthContext);
  // console.log(currentUser);
  

  return (
    <nav className="navbar-light">
      <div className="left">
        <Link to="/" className="logo">
          <img src="/logo.png" alt="logo" />
          <span>IEM CONNECT</span>
        </Link>
      </div>
      <div className="center">
        <Link to="/">Study Material</Link>
        <Link to="/">Post</Link>
        <Link to="/">About</Link>
      </div>
      <div className="right">
        <div className="user" onClick={() => setDropdownOpen((prev) => !prev)}>
          <img src="/noavatar.jpg" alt="profile" />
          <span>{currentUser.name}</span>
          <div className={dropdownOpen ? "dropdown active" : "dropdown"}>
            <Link to="/profile">My Profile</Link>
            <Link to="/add">Add Product</Link>
            <Link to="/myproduct">My Products</Link>
            <Link to="/my-ratings">My Rating</Link>
            <Link to="/logout">Logout</Link>
          </div>
        </div>
        <div className="menuIcon">
          <img
            src="/menu.png"
            alt="menu"
            onClick={() => setOpen((prev) => !prev)}
          />
        </div>
        <div className={open ? "menu active" : "menu"}>
          <Link to="/">Study Material</Link>
          <Link to="/">Post</Link>
          <Link to="/">About</Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
