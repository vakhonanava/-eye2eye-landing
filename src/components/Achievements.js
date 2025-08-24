import React from "react";

function Achievements() {
  return (
    <section id="achievements" className="achievements" aria-labelledby="achievements-title">
      <h2 id="achievements-title">Achievements & Awards</h2>

      <div className="cards">
        <article className="card">
          <div className="image-wrapper">
            <img
              src="/image/IMG_8519.jpeg"
              alt="International grant ceremony"
              className="special-img"
            />
          </div>
          <h3>150,000 Inovation & Technology Grant</h3>
          <p>Funded by international donors supporting innovation.</p>
        </article>

        <article className="card">
          <div className="image-wrapper">
            <img src="/image/IMG_4965.JPG" alt="Regional grant support" />
          </div>
          <h3>Regional Grants</h3>
          <p>Backed by USAID and Georgia’s Innovation & Technology Agency.</p>
        </article>

        <article className="card">
          <div className="image-wrapper">
            <img src="/image/IMG_pro.png" alt="Best Prototype award" />
          </div>
          <h3>Best Prototype Award</h3>
          <p>Winner for MedTech innovation and practical impact.</p>
        </article>

        <article className="card">
          <div className="image-wrapper">
            <img src="/image/patent.png" alt="Patent protection" />
          </div>
          <h3>Patents</h3>
          <p>Globally protected with patents securing our unique invention.</p>
        </article>
      </div>

      <div className="partners">
        <h3 className="partners-title">Backed & Supported by</h3>
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