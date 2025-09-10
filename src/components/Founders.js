// src/components/Founders.js
import React from "react";

const LinkedinIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <path d="M4.98 3.5A2.5 2.5 0 1 1 5 8.5a2.5 2.5 0 0 1-.02-5zM3 9h4v12H3V9zm7 0h3.8v1.7h.05c.53-.95 1.83-1.95 3.76-1.95 4.02 0 4.76 2.65 4.76 6.1V21h-4v-5.3c0-1.26-.02-2.88-1.76-2.88-1.76 0-2.03 1.37-2.03 2.79V21h-4V9z" />
  </svg>
);

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
            <img src="/image/vakho.jpeg" alt="Vakhtang Nanava" />
          </a>

          {/* >>> აი აქ გადმოდის აიქონი – სურათის ქვეშ */}
          <div className="founder-social">
            <a
              href="https://www.linkedin.com/in/vakhtang-nanava/"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
              aria-label="LinkedIn: Vakhtang Nanava"
            >
              <LinkedinIcon />
            </a>
          </div>

          <a
            href="https://www.linkedin.com/in/vakhtang-nanava/"
            target="_blank"
            rel="noopener noreferrer"
            className="founder-link"
          >
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
          </a>

          {/* სურათის ქვეშ */}
          <div className="founder-social">
            <a
              href="https://www.linkedin.com/in/nia-toloraia-54a269273/"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
              aria-label="LinkedIn: Nia Toloraia"
            >
              <LinkedinIcon />
            </a>
          </div>

          <a
            href="https://www.linkedin.com/in/nia-toloraia-54a269273/"
            target="_blank"
            rel="noopener noreferrer"
            className="founder-link"
          >
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
