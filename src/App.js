import React from "react";
import Hero from "./components/Hero";
import Problem from "./components/Problem";
import Achievements from "./components/Achievements";
import Founders from "./components/Founders";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Hero />
      <Problem />
      <Achievements />
      <Founders />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
