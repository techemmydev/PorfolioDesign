import React from "react";
import "./Aboutpage.css";
import profile_img from "/imageFolder/finalimage.jfif";
import Typewriter from "typewriter-effect";

const Aboutpage = () => {
  const scrollTo = (y, menuName) => {
    window.scrollTo({
      top: y,
      behavior: "smooth",
    });
    setMenu(menuName);
  };

  return (
    <div id="home" className="hero">
      <img
        src={profile_img}
        alt=""
        style={{ borderRadius: "50%", width: "25%" }}
      />
      <h1>I'm Emmanuel Chukwuma based in Nigeria</h1>
      <div className="about-text">
        I'm a
        <Typewriter
          options={{
            strings: ["Frontend Developer", "Software Developer", "Freelancer"],
            autoStart: true,
            loop: true,
          }}
        />
        with 2 years of experience in the Bulb Africa
      </div>

      <div className="hero-action" id="contact">
        <div className="hero-connect" onClick={() => scrollTo(5300, "connect")}>
          Connect with me
        </div>
        <div className="hero-resume">My resume</div>
      </div>
    </div>
  );
};

export default Aboutpage;
