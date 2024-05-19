import React, { useRef, useState } from "react";
import "./Navbar.css";

import underline from "/imageFolder/nav_underline.svg";
import menu_open from "/imageFolder/menu_open.svg";
import menu_close from "/imageFolder/menu_close.svg";
const Navbar = () => {
  const [menu, setMenu] = useState("home");
  const menuRef = useRef();
  const openMenu = () => {
    menuRef.current.style.right = "0";
  };
  const closeMenu = () => {
    menuRef.current.style.right = "-350px";
  };
  const scrollTo = (y, menuName) => {
    window.scrollTo({
      top: y,
      behavior: "smooth",
    });
    setMenu(menuName);
  };

  return (
    <div className="navbar">
      <div className="myname">
        <h1>Emmanuel</h1>
      </div>

      <img src={menu_open} onClick={openMenu} alt="" className="nav-mob-open" />
      <ul ref={menuRef} className="nav-menu">
        <img
          src={menu_close}
          onClick={closeMenu}
          alt=""
          className="nav-mob-close"
        />
        <li>
          <p onClick={() => scrollTo(200, "home")}>Home</p>
          {menu === "home" ? <img src={underline} alt="" /> : <></>}
        </li>
        <li>
          <p onClick={() => scrollTo(900, "about")}>About me</p>
          {menu === "about" ? <img src={underline} alt="" /> : <></>}
        </li>

        <li>
          <p onClick={() => scrollTo(1800, "work")}>Portfolio</p>
          {menu === "work" ? <img src={underline} alt="" /> : <></>}
        </li>
        <li>
          <p onClick={() => scrollTo(4400, "contact")}>Contact</p>
          {menu === "contact" ? <img src={underline} alt="" /> : <></>}
        </li>
      </ul>
      {/* <div className="nav-connect" onClick={() => scrollTo(5300, "connect")}></div> */}
      <div className="nav-connect">
        <a
          href="https://www.linkedin.com/in/emmanuel-chukwuma-96744221a/"
          target="blank"
        >
          {" "}
          Connect with me
        </a>
      </div>
    </div>
  );
};

export default Navbar;
