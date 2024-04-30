import "./App.css";
import About from "./components/About/About";
import Service from "./components/service/Service";
import Aboutpage from "./components/Aboutpage/Aboutpage";
import MyWork from "./components/MyWork/MyWork";
import Navbar from "./components/Navbar/Navbar";
import Contact from "./components/Contact/Contact";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <>
      <div>
        <Navbar />
        <Aboutpage />
        <About />
        {/* <Service /> */}
        <MyWork />
        <Contact />
        <Footer />
      </div>
    </>
  );
}
// e9c5c15d-a128-461b-8794-58c846829f33

export default App;
