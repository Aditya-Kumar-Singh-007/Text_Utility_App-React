import { useState } from "react";
import "./App.css";
import Navbar from "./component/Navbar";
import TextForm from "./component/TextForm";
import About from "./component/About";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  /*Dark Mode*/
  const [mode, setMode] = useState("light"); //whether dark mode is enabled

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#0a114a";
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
    }
  };

  return (
    <>
      <Router>
        <Navbar
          title="TextUtils"
          aboutText="About Us"
          searchPlaceholder="Search Here ..."
          mode={mode}
          toggleMode={toggleMode}
        />
        <div className="container">
          <Routes>
            <Route
              exact path="/"
              element={
                <TextForm
                  heading="Transform your text with ease!"
                  mode={mode}
                />
              }
            />
            <Route exact path="/about" element={<About />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
