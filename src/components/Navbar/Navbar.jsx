import React from "react";
import "./Navbar.css";
import logo from "/imageFolder/logo.svg";
const Navbar = () => {
  return (
    <div className="navbar">
      <img src={logo} alt="" />
      <ul className="nav-menu">
        <li> home</li>
        <li> About me</li>
        <li>services</li>
        <li> portfolio </li>
        <li>contact</li>
      </ul>
      <div className="nav-connect">connect with me</div>
    </div>
  );
};

export default Navbar;
