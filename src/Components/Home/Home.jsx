import React from "react";
import "./Home.css";

const Home = () => {
  return (
    <div className="home-container">
      <div className="background-animation">
        <div className="floating-circle circle-1"></div>
        <div className="floating-circle circle-2"></div>
        <div className="floating-circle circle-3"></div>
        <div className="floating-circle circle-4"></div>
      </div>
      
      <div className="content">
        <div className="hello-wrapper">
          <h1 className="hello-text">
            <span className="word">Hello</span>
            <span className="word">World</span>
          </h1>
          <div className="subtitle">
            <span className="letter">B</span>
            <span className="letter">i</span>
            <span className="letter">e</span>
            <span className="letter">n</span>
            <span className="letter">v</span>
            <span className="letter">e</span>
            <span className="letter">n</span>
            <span className="letter">i</span>
            <span className="letter">d</span>
            <span className="letter">o</span>
            <span className="space"></span>
            <span className="letter">a</span>
            <span className="space"></span>
            <span className="letter">m</span>
            <span className="letter">i</span>
            <span className="space"></span>
            <span className="letter">m</span>
            <span className="letter">u</span>
            <span className="letter">n</span>
            <span className="letter">d</span>
            <span className="letter">o</span>
          </div>
        </div>
        
        <div className="pulse-button">
          <button className="cta-button">
            Explorar
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;