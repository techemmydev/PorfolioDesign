import "./App.css";
import About from "./components/About/About";
// import Service from "./components/service/Service";
import Aboutpage from "./components/Aboutpage/Aboutpage";
import MyWork from "./components/MyWork/MyWork";
import Navbar from "./components/Navbar/Navbar";
import Contact from "./components/Contact/Contact";
import Footer from "./components/footer/Footer";
import mywork_data from "../public/imageFolder/mywork_data";
function App() {
  // const containerStyles = {
  //   width: "500px",
  //   height: "280px",
  //   margin: "0 auto",
  // };
  return (
    <>
      <div>
        <Navbar />
        <Aboutpage />
        <About />
        {/* <Service /> */}
        <div className="containerStyles">
          <MyWork
            slides={mywork_data.map((image, index) => {
              return {
                url: image.w_img,
                index: index,
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
// e9c5c15d-a128-461b-8794-58c846829f33

export default App;
