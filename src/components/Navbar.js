import React, { useEffect, useRef, useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();
  const [show, setShow] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);
  const lastScroll = useRef(0);

  // Hide/show navbar on scroll
  useEffect(() => {
    const onScroll = () => {
      const y = window.pageYOffset || document.documentElement.scrollTop;
      setShow(y < lastScroll.current || y < 10);
      lastScroll.current = y;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToId = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const go = (id) => {
    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => scrollToId(id), 0);
    } else {
      scrollToId(id);
    }
    setMenuOpen(false); // close menu after click
  };

  return (
    <nav className={`navbar ${show ? "show" : "hide"}`}>
      <a className="navbar-brand" href="#!" onClick={() => go("hero")}>
        <img src="/eye2eyeicon.png" alt="Eye2Eye" className="brand-logo" />
        <span>Eye2Eye</span>
      </a>

      {/* Burger icon */}
      <button
        className={`burger ${menuOpen ? "open" : ""}`}
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle navigation"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      <ul className={`navbar-links ${menuOpen ? "active" : ""}`}>
        <li>
          <button className="nav-link" onClick={() => go("hero")}>
            Home
          </button>
        </li>
        <li>
          <button className="nav-link" onClick={() => go("achievements")}>
            Awards
          </button>
        </li>
        <li>
          <button className="nav-link" onClick={() => go("roadmap")}>
            Roadmap
          </button>
        </li>
        <li>
          <button className="nav-link" onClick={() => go("founders")}>
            Founders
          </button>
        </li>
        <li>
          <Link
            className="nav-link"
            to="/blogs"
            onClick={() => setMenuOpen(false)}
          >
            Blogs
          </Link>
        </li>
        <li>
          <button className="nav-link" onClick={() => go("contact")}>
            Contact
          </button>
        </li>
      </ul>
    </nav>
  );
}
