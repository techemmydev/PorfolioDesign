import React from "react";
import "./footer.css";
import user_icon from "/imageFolder/user_icon.svg";
import { MdOutlineMail } from "react-icons/md";
import { FiPhone } from "react-icons/fi";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
const Footer = () => {
  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "e9c5c15d-a128-461b-8794-58c846829f33");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    }).then((res) => res.json());

    if (res.success) {
      alert(" your Email was Successfully sent ", res);
      event.target.reset();
    }
  };
  return (
    <div id="footer" className="footer">
      <div className="footer-top">
        <div className="footer-top-left">
          <div className="myname">
            <h1>Emmanuel</h1>
          </div>
          <p>
            Let's connect and explore opportunities to collaborate on impactful
            projects!
          </p>
        </div>
        <div className="footer-top-right">
          <form action="  " onSubmit={onSubmit}>
            <div className="footer-email-input">
              <img src={user_icon} alt="" />
              <input type="email" placeholder="Enter your email" name="email" />
            </div>
            <button type="submit" className="contact-submit">
              Subscribe
            </button>
          </form>
        </div>
      </div>
      <hr />
      <div className="footer-bottom">
        <p className="footer-bottom-left">
          &#169; 2024 Emmydev. All rights and reserved.
        </p>
        <div className="footer-bottom-right">
          <p>
            {" "}
            <span>
              <FiPhone />
            </span>
            08065592378
          </p>
          <p>
            <span>
              <MdOutlineMail />
            </span>{" "}
            gabrielemmanuelchukwuma@gmail.com
          </p>
          <p>
            <a href=" https://github.com/techemmydev" target="blank">
              <span>
                <FaGithub />
              </span>
              github Address
            </a>
          </p>
          <p>
            <a
              href="https://www.linkedin.com/in/emmanuel-chukwuma-96744221a/"
              target="blank"
            >
              <span>
                <FaLinkedin />
              </span>
              Linkedin{" "}
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
