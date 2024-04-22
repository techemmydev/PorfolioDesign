import React, { useState } from "react";
import "./Navbar.css";
import logo from "/imageFolder/logo.svg";
import underline from "/imageFolder/nav_underline.svg";
const Navbar = () => {
  const [menu, setMenu] = useState("home");

  const scrollTo = (y) => {
    window.scrollTo({
      top: y,
      behavior: "smooth",
    });
  };

  return (
    <div className="navbar">
      <img src={logo} alt="" />
      <ul className="nav-menu">
        <li>
          <p onClick={() => setMenu("home")}>Home</p>
          {menu === "home" ? <img src={underline} alt="" /> : <></>}
        </li>
        <li>
          <p onClick={() => setMenu("about")}>About me</p>
          {menu === "about" ? <img src={underline} alt="" /> : <></>}
        </li>
        <li>
          <p onClick={() => scrollTo(1900)}>Services</p>
          {menu === "" ? <img src={underline} alt="" /> : <></>}
        </li>
        <li>
          <p onClick={() => setMenu("work")}>Portfolio</p>
          {menu === "work" ? <img src={underline} alt="" /> : <></>}
        </li>
        <li>
          <p onClick={() => scrollTo(3000)}>Contact</p>
          {menu === "" ? <img src={underline} alt="" /> : <></>}
        </li>
      </ul>
      <div className="nav-connect">connect with me</div>
    </div>
  );
};

export default Navbar;
