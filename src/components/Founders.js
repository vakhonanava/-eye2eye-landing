// src/components/Founders.js
import React from "react";

function Founders() {
  return (
    <section id="founders" className="founders">
      <h2>Founders</h2>

      <div className="founder-cards">
        {/* Vakhtang */}
        <div className="founder">
          <a
            href="https://www.linkedin.com/in/vakhtang-nanava/"
            target="_blank"
            rel="noopener noreferrer"
            className="founder-link"
            aria-label="Open Vakhtang Nanava on LinkedIn"
          >
            <img src="/image/IMG_5461.jpeg" alt="Vakhtang Nanava" />
            <h3>Vakhtang Nanava</h3>
          </a>
          <p className="role">Co-Founder & CEO</p>
          <p>
            Entrepreneur with expertise in MedTech, marketing, and technology
            integration.
          </p>
        </div>

        {/* Nia */}
        <div className="founder">
          <a
            href="https://www.linkedin.com/in/nia-toloraia-54a269273/"
            target="_blank"
            rel="noopener noreferrer"
            className="founder-link"
            aria-label="Open Nia Toloraia on LinkedIn"
          >
            <img src="/image/nia.jpeg" alt="Nia Toloraia" />
            <h3>Nia Toloraia</h3>
          </a>
          <p className="role">Co-Founder & CSO</p>
          <p>
            Medical professional with expertise in healthcare, research, and
            technology integration.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Founders;
