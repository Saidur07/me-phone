import React from "react";
import "./Header.css";
import logo from "../../iPhone.png";

const Header = () => {
  return (
    <div className="text-center my-3">
      <img src={logo} alt="" className="logo" />
      <h1>MEPhone</h1>
      <hr className="container" />
    </div>
  );
};

export default Header;
