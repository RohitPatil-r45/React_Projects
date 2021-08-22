import React, { useState, useEffect } from "react";
import "./App.css";
import { BsToggleOff, BsToggleOn } from "react-icons/bs";
import { FaInstagram, FaFacebook, FaYoutube } from "react-icons/fa";
import Tilt from "react-parallax-tilt";

function App() {
  const [toggle, setToggle] = useState("true");
  const [theme, setTheme] = useState("light-theme");
  const toggleTheme = () => {
    if (theme === "light-theme") {
      setTheme("dark-theme");
      setToggle(false);
    } else {
      setTheme("light-theme");
      setToggle(true);
    }
  };

  useEffect(() => {
    document.documentElement.className = theme;
  }, [theme]);

  return (
    <>
      <div className="App">
        {toggle ? (
          <div>
            <button className="toggle-btn" onClick={() => toggleTheme()}>
              <BsToggleOff />
            </button>
            <h1>Light Theme</h1>
          </div>
        ) : (
          <div>
            <button className="toggle-btn" onClick={() => toggleTheme()}>
              <BsToggleOn />
            </button>
            <h1>Dark Theme</h1>
          </div>
        )}
        <h1>Tilt JS</h1>
      </div>
      <div className="container">
        <Tilt scale={3}>
          <div className="fb-icon">
            <FaFacebook />
          </div>
        </Tilt>
        <Tilt scale={3}>
          <div className="icon-container">
            <FaInstagram />
          </div>
        </Tilt>
        <Tilt scale={3}>
          <div className="yt-icon">
            <FaYoutube />
          </div>
        </Tilt>
      </div>
    </>
  );
}

export default App;
