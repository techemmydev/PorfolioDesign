import React, { useEffect, useRef } from "react";
import "./Aboutpage.css";
import profile_img from "/imageFolder/profile_img.svg";
import { init } from "ityped";
const Aboutpage = () => {
  const textRef = useRef();
  useEffect(() => {
    init(textRef.current, {
      showCursor: false,
      backDelay: 1500,
      backSpeed: 60,
      strings: ["Frontend Developer", "Designer", "Freelancers"],
    });
  }, []);
  return (
    <div id="home" className="hero">
      <img src={profile_img} alt="" />
      <h1>I'm Olawunmi Olatunji based in Nigeria</h1>
      <p>
        I,m a <span ref={textRef}></span> with 2 years of expreince in multiple
        companies like the Bulb Africa, Eschool
      </p>
      <div className="hero-action">
        <div className="hero-connect">connect with me</div>
        <div className="hero-resume">my resume</div>
      </div>
    </div>
  );
};

export default Aboutpage;
