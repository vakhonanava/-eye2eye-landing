import React, { useEffect, useRef, useState } from "react";

const MILESTONES = [
  {
    year: 2023,
    title: "Regional Grant",
    points: ["Created MVP", "Filed Georgian patent"],
  },
  {
    year: 2024,
    title: "GITA 150K Grant",
    points: ["Filed international patent"],
  },
  {
    year: 2025,
    title: "Product Ready",
    points: ["Finalized product", "Go-to-market ready"],
  },
];

// ——— Utilities ———
function useInViewOnce(ref, threshold = 0.25) {
  const [shown, setShown] = useState(false);
  useEffect(() => {
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setShown(true);
          io.disconnect();
        }
      },
      { threshold }
    );
    if (ref.current) io.observe(ref.current);
    return () => io.disconnect();
  }, [ref, threshold]);
  return shown;
}

export default function Roadmap() {
  const wrapRef = useRef(null);
  const visible = useInViewOnce(wrapRef);

  return (
    <section id="roadmap" className="rmx" ref={wrapRef}>
      <h2 className="rmx-title">Our Roadmap</h2>

      {/* Timeline track */}
      <div className="rmx-track">
        <div className="rmx-line" />
        <div className={`rmx-fill ${visible ? "is-on" : ""}`} />
        <div className="rmx-items">
          {MILESTONES.map((m, i) => {
            const side = i % 2 === 0 ? "top" : "bottom";
            return (
              <div
                className={`rmx-item ${side} ${visible ? "show" : ""}`}
                key={m.year}
              >
                <div className="rmx-dot" />
                <div className="rmx-card">
                  <div className="rmx-year">{m.year}</div>
                  <div className="rmx-heading">{m.title}</div>
                  <ul className="rmx-list">
                    {m.points.map((p, idx) => (
                      <li key={idx}>{p}</li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
