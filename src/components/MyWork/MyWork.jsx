import React, { useState } from "react";
import "./MyWork.css";
import mywork_data from "../../../public/imageFolder/mywork_data";
import arrow_icon from "/imageFolder/arrow_icon.svg";

const MyWork = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === mywork_data.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? mywork_data.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="mywork">
      <div className="mywork-title">
        <h1>My latest work</h1>
        {/* I removed the import of theme_pattern as it's not used */}
      </div>
      <div className="mywork-container">
        {mywork_data.map((work, index) => (
          <img
            key={index}
            src={work.w_img}
            alt={`mywork ${index}`}
            className={index === currentIndex ? "active" : ""}
          />
        ))}
      </div>
      <div className="mywork-showmore">
        <p onClick={prevSlide}>Previous</p>
        <p onClick={nextSlide}>Next</p>
        <img src={arrow_icon} alt="arrow" />
      </div>
    </div>
  );
};

export default MyWork;
