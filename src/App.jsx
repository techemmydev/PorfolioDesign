import "./App.css";
import About from "./components/About/About";
import Aboutpage from "./components/Aboutpage/Aboutpage";
import MyWork from "./components/MyWork/MyWork";
import Navbar from "./components/Navbar/Navbar";
import Contact from "./components/Contact/Contact";
import Footer from "./components/footer/Footer";
import mywork_data from "../public/imageFolder/mywork_data";
import { useState } from "react";
// import Link from "react-router-dom";
function App() {
  return (
    <>
      <div>
        <Navbar />
        <Aboutpage />
        <About />
        <div className="containerStyles">
          <MyWork
            slides={mywork_data.map((image, index) => {
              return {
                url: image.w_img,
                index: index,
                linkto: image.linkto,
                names: image.w_name,
              };
            })}
          />
        </div>
        <Contact />
        <Footer />
      </div>
    </>
  );
}

export default App;
