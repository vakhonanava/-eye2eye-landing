import React from "react";

function Founders() {
  return (
    <section className="founders">
      <h2>Founders</h2>
      <div className="founder-cards">
        <div className="founder">
          <img src="/image/IMG_5461.jpeg" alt="Vakhtang Nanava" />
          <h3>Vakhtang Nanava</h3>
          <p className="role">Co-Founder & CEO</p>
          <p>
            Entrepreneur with expertise in MedTech, marketing, and technology
            integration.
          </p>
        </div>
        <div className="founder">
          <img src="/image/nia.jpeg" alt="Co-Founder" />
          <h3>Nia Toloraia</h3>
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
