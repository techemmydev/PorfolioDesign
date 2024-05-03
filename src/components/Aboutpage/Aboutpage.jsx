import React, { useEffect, useRef } from "react";
import "./Aboutpage.css";
import profile_img from "/imageFolder/profile_img.svg";
// import { init } from "ityped";
import Typewriter from "typewriter-effect";

const Aboutpage = () => {
  // const textRef = useRef();

  // useEffect(() => {
  //   console.log(textRef.current);
  //   init(textRef.current, {
  //     showCursor: true,
  //     backDelay: 1500,
  //     backSpeed: 60,
  //     strings: ["Frontend Developer", "Designer", "Freelancer"],
  //   });
  // }, []);
  {
    /* <span ref={textRef}></span> */
  }
  return (
    <div id="home" className="hero">
      <img src={profile_img} alt="" />
      <h1>I'm Olawunmi Olatunji based in Nigeria</h1>
      <div className="about-text">
        I'm a
        <Typewriter
          options={{
            strings: ["Frontend Developer", "web Developer", "Freelancer"],
            autoStart: true,
            loop: true,
          }}
        />
        with 2 years of experience in multiple companies like Bulb Africa,
        Eschools
      </div>

      <div className="hero-action">
        <div className="hero-connect">Connect with me</div>
        <div className="hero-resume">My resume</div>
      </div>
    </div>
  );
};

export default Aboutpage;
