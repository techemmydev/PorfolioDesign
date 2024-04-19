import "./App.css";
import About from "./components/About/About";
import Navbar from "./components/Navbar/Navbar";
import Service from "./components/service/Service";
import Aboutpage from "./components/Aboutpage/Aboutpage";
import MyWork from "./components/MyWork/MyWork";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <>
      <div>
        <Navbar />
        <Aboutpage />
        <About />
        <Service />
      </div>
    </>
  );
}

export default App;
