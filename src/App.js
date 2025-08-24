import React from "react";
import { HashRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Blogs from "./components/Blogs";
import Blog from "./components/Blog";

import Hero from "./components/Hero";
import Problem from "./components/Problem";
import Achievements from "./components/Achievements";
import Roadmap from "./components/Roadmap";
import Founders from "./components/Founders";
import Contact from "./components/Contact";

function Landing() {
  return (
    <>
      <section id="hero">
        <Hero />
      </section>
      <section id="problem">
        <Problem />
      </section>
      <section id="achievements">
        <Achievements />
      </section>

      <section id="roadmap">
        <Roadmap />
      </section>
      <section id="founders">
        <Founders />
      </section>

      <section id="blogs">
        <Blogs />
      <section id="contact"></section>
      <Contact />
      </section>
    </>
  );
}

export default function App() {
  return (
    <HashRouter>
      <div className="app-shell">
        <Navbar />
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/blog/:slug" element={<Blog />} />
        </Routes>
        <Footer />
      </div>
    </HashRouter>
  );
}