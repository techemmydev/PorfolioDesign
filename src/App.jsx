import "./App.css";
import About from "./components/About/About";
import Navbar from "./components/Navbar/Navbar";
import Service from "./components/service/Service";
import Aboutpage from "./components/Aboutpage/Aboutpage";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <>
      <div>
        <Navbar />
        <Aboutpage />
        <About />
        <Service />
        <Footer />
      </div>
    </>
  );
}

export default App;
