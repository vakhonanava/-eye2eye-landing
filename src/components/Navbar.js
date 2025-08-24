import React, { useEffect, useRef, useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();
  const [show, setShow] = useState(true);
  const lastScroll = useRef(0);

  // აჩინოს/დამალოს navbar scroll-ზე
  useEffect(() => {
    const onScroll = () => {
      const y = window.pageYOffset || document.documentElement.scrollTop;
      setShow(y < lastScroll.current || y < 10);
      lastScroll.current = y;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // რბილი స్కროლი კონკრეტულ სექციაზე
  const scrollToId = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  // თუ არა ვართ ლენდინგზე — დაგვაბრუნე "/", მერე სქროლი
  const go = (id) => {
    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => scrollToId(id), 0); // დაელოდე DOM-ს
    } else {
      scrollToId(id);
    }
  };

  return (
    <nav className={`navbar ${show ? "show" : "hide"}`}>
      <a className="navbar-brand" href="#!" onClick={() => go("hero")}>
        <img src="/eye2eyeicon.png" alt="Eye2Eye" className="brand-logo" />
        <span>Eye2Eye</span>
      </a>

      <ul className="navbar-links">
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
          <Link className="nav-link" to="/blogs">
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
