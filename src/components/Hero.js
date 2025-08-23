import React from "react";

function Hero() {
  return (
    <section className="hero">
      <video className="hero-video" autoPlay loop muted playsInline>
        <source src="/video/video.mp4" type="video/mp4" />
      </video>

      {/* Overlay ტექსტისა და ღილაკისთვის */}
      <div className="hero-content">
        <h1>Eye2Eye</h1>
        <p>
          A non-invasive solution for Strabismus & Amblyopia. Portable,
          home-usable, and effective.
        </p>
        <a href="#contact" className="cta-btn">
          Contact Us
        </a>
      </div>

      <div className="scroll-down">↓</div>
    </section>
  );
}

export default Hero;
