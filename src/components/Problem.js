import React from "react";
import "../App.css";

function Problem() {
  return (
    <section className="problem-section" id="problem">
      <div className="problem-container">
        <h2 className="section-title">Why Eye2Eye?</h2>
        <p className="problem-sub">
          A patented MedTech solution with global scalability — safe, proven,
          and investor-ready.
        </p>

        {/* KPI row */}
        <div className="problem-kpis">
          <div className="kpi">
            <span className="kpi-num">~ 60%</span>
            <span className="kpi-label">angle reduction ~  6 months</span>
          </div>
          <div className="kpi">
            <span className="kpi-num">1 Month</span>
            <span className="kpi-label">visible improvement</span>
          </div>
          <div className="kpi">
            <span className="kpi-num">250k</span>
            <span className="kpi-label">grants secured</span>
          </div>
          <div className="kpi">
            <span className="kpi-num">0%</span>
            <span className="kpi-label">Risks</span>
          </div>
        </div>

        {/* Value cards */}
        <div className="problem-cards-wrapper">
          <div className="problem-card">
            <h3>Safe & Non-invasive</h3>
            <p>
              No surgery. No patching. No side effects. A portable, patented
              solution that transforms a complex medical problem into an
              affordable daily routine.
            </p>
            <ul>
              <li>Low-cost alternative to invasive methods</li>
              <li>Zero medical risks, 100% patient comfort</li>
              <li>Scalable for millions of patients worldwide</li>
            </ul>
          </div>

          <div className="problem-card">
            <h3>Our Breakthrough</h3>
            <p>
              Eye2Eye is the <b>first non-digital, portable device</b> for
              effective daily training:
            </p>
            <ul>
              <li>Minutes per day at home — no specialists</li>
              <li>
                Visible improvement in <b>1 Month</b>
              </li>
              <li>
                <b>60% angle reduction</b> within 6 months
              </li>
              <li>Safe, non-invasive, no side effects</li>
            </ul>
          </div>

          <div className="problem-card">
            <h3>Surgery Support — Not a Competitor</h3>
            <p>
              While Eye2Eye helps many patients avoid surgery, in cases of{" "}
              <b>nerve damage</b> surgery is sometimes required.
            </p>
            <p>
              <b>Eye2Eye</b> is essential for postoperative recovery —
              supporting neuromuscular rehabilitation, preventing recurrence,
              and stabilizing binocular vision long-term.
            </p>
          </div>
        </div>

        {/* CTA */}
        {/* <div className="problem-cta">
          <a
            className="btn btn-primary"
            href="/deck.pdf"
            target="_blank"
            rel="noreferrer"
          >
            See Pitch Deck
          </a>
        </div> */}
      </div>
    </section>
  );
}

export default Problem;
