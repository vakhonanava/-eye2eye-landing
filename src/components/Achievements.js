import React from "react";

function Achievements() {
  return (
    <section className="achievements">
      <h2>Achievements & Awards</h2>
      <div className="cards">
        <div className="card">
          <div className="image-wrapper">
            <img
              src="/image/IMG_8519.jpeg"
              alt="International Grant"
              className="special-img"
            />
          </div>
          <h3>150 000 Grant</h3>
          <p> Funded by international donors supporting innovation.</p>
        </div>

        <div className="card">
          <div className="image-wrapper">
            <img src="/image/IMG_4965.JPG" alt="Regional Grant" />
          </div>
          <h3>Regional Grants</h3>
          <p>Backed by USAID and Georgia’s Innovation & Technology Agency </p>
        </div>

        <div className="card">
          <div className="image-wrapper">
            <img src="/image/IMG_pro.png" alt="Best Prototype Award" />
          </div>
          <h3>Best Prototype Award</h3>
          <p>Winner of the Best Prototype recognition for MedTech innovation</p>
        </div>

        <div className="card">
          <div className="image-wrapper">
            <img src="/image/patent.png" alt="Patents" />
          </div>
          <h3>Patents</h3>
          <p> Globally protected with patents securing our unique invention.</p>
        </div>
      </div>

      <div className="partners">
        <div className="logos">
          <div className="logo-wrapper">
            <img src="/image/gita.JPG" alt="GITA" />
          </div>
          <div className="logo-wrapper">
            <img src="/image/usaid.png" alt="USAID" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Achievements;