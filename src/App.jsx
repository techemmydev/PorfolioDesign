import "./App.css";
import Aboutpage from "./components/Aboutpage/Aboutpage";
import MyWork from "./components/MyWork/MyWork";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <>
      <div>
        <Navbar />
        <Aboutpage />
        <MyWork />
      </div>
    </>
  );
}

export default App;
