import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Service from "./components/service/Service";

function App() {
  return (
    <>
      <div>
        <Navbar />
        <Service />
      </div>
    </>
  );
}

export default App;
import "./App.css";
import Aboutpage from "./components/Aboutpage/Aboutpage";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <>
      <div>
        <Navbar />
        <Aboutpage />
      </div>
    </>
  );
}

export default App;
