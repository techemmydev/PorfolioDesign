import "./App.css";
import About from "./components/About/About";
import Navbar from "./components/Navbar/Navbar";
import Service from "./components/service/Service";
import Aboutpage from "./components/Aboutpage/Aboutpage";
import Contact from "./components/Contact/Contact";

function App() {
  return (
    <>
      <div>
        <Navbar />
        <Aboutpage />
        <About/>
        <Service />
        <Contact/>
      </div>
    </>
  );
}

export default App;

