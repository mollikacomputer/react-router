import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";
const Header = () => {
  return (
    <div>
      <h2> Welcome to my react router dome</h2>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/aboutus">About Us</Link>
        <Link to="/friends">Friends</Link>
      </nav>
    </div>
  );
};

export default Header;
