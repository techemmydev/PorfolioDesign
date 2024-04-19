import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Service from "./components/service/Service";
import Aboutpage from "./components/Aboutpage/Aboutpage";

function App() {
  return (
    <>
      <div>
        <Navbar />
        <Aboutpage />
        <Service />
      </div>
    </>
  );
}

export default App;
