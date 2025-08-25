import React from "react";
import "../App.css";

function Problem() {
  return (
    <section className="problem-section" id="problem">
      <div className="container">
        <h2 className="section-title">Why Eye2Eye?</h2>

        <div className="problem-cards-wrapper">
          {/* Card 1 */}
          <div className="problem-card">
            <h3>Safe & Non-invasive</h3>
            <p>
              No surgery. No patching. No side effects. A portable, patented
              solution that transforms a complex medical problem into an
              affordable daily routine.
            </p>
            <ul className="problem-card-list">
              <li>Low-cost alternative to invasive methods</li>
              <li>Zero medical risks, 100% patient comfort</li>
              <li>Scalable for millions of patients worldwide</li>
            </ul>
          </div>

          {/* Card 2 */}
          <div className="problem-card">
            <h3>Our Breakthrough</h3>
            <p>
              Eye2Eye is the <b>first non-digital, portable device </b>
              for effective daily training:
            </p>
            <ul className="problem-card-list">
              <li>Requires only minutes a day, at home — no specialists</li>
              <li>
                Visible improvement in <b>2 weeks</b>
              </li>
              <li>
                <b>60% angle reduction</b> within 6 months
              </li>
              <li>Safe, non-invasive, no side effects</li>
            </ul>
          </div>

          {/* Card 3 */}
          <div className="problem-card">
            <h3>Surgery Support  Not a Competitor</h3>
            <p>
              While Eye2Eye helps many patients avoid surgery, in cases of{" "}
              <b>nerve damage</b> surgery is sometimes required.
            </p>
            <p>
              <b>Eye2Eye</b>  is essential for postoperative
              recovery supporting neuromuscular rehabilitation, preventing
              recurrence, and stabilizing binocular vision long-term.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}


export default Problem;
